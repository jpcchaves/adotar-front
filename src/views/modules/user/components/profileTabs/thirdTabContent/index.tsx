import { Button, CardContent, Grid } from '@mui/material'
import { FormikValues } from 'formik'
import { SelectInput, TextInput, ZipcodeInput } from 'src/@core/components/inputs'
import useDisableSubmitButton from 'src/hooks/useDisableSubmitButton/useDisableSubmitButton'
import { generateCitiesMenuItems } from 'src/utils/common/menuItems/generateMenuItems'
import useGetSelectedCities from 'src/views/modules/pets/components/formSteps/hooks/useGetSelectedCities'
import { clearCityInput } from 'src/views/modules/pets/components/formSteps/utils/clearCityInput'
import { useGetStatesData } from 'src/views/modules/pets/data/geolocation/states'

interface IProps {
  validation: FormikValues
}

const ThirdTabContent = ({ validation }: IProps) => {
  const { selectedCities } = useGetSelectedCities({ validation })
  const { isSubmitButtonDisabled } = useDisableSubmitButton({ validation })

  console.log(useGetStatesData())

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        validation.handleSubmit(e)
      }}
    >
      <CardContent>
        <Grid container spacing={6}>
          <Grid item sm={4}>
            <ZipcodeInput
              inputIdentifier='zipcode'
              inputLabel='CEP'
              value={validation.values.zipcode}
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              isRequired
              isInvalid={!!(validation.errors.zipcode && validation.touched.zipcode)}
              errorMessage={validation.errors.zipcode}
              setFieldValue={validation.setFieldValue}
            />
          </Grid>

          <Grid item sm={4}>
            <SelectInput
              inputIdentifier='state'
              isInvalid={!!((validation.errors.state?.value || validation.errors?.state) && validation.touched.state)}
              errorMessage={validation.errors.state?.value || validation.errors?.state}
              setFieldValue={validation.setFieldValue}
              onClick={() => {
                clearCityInput(validation)
              }}
              value={validation.values.state?.value}
              onBlur={validation.handleBlur}
              inputLabel='Estado'
              isRequired
              menuItems={useGetStatesData()}
              disabled={!validation.values.zipcode}
            />
          </Grid>

          <Grid item xs={6} sm={4}>
            <SelectInput
              inputIdentifier='city'
              isInvalid={!!((validation.errors.city?.value || validation.errors?.city) && validation.touched.city)}
              errorMessage={validation.errors.city?.value || validation.errors?.city}
              setFieldValue={validation.setFieldValue}
              value={validation.values.city?.value}
              onBlur={validation.handleBlur}
              inputLabel='Cidade'
              isRequired
              menuItems={generateCitiesMenuItems(selectedCities)}
              disabled={!validation.values.zipcode || !validation.values.state}
            />
          </Grid>

          <Grid item xs={6}>
            <TextInput
              inputIdentifier='neighborhood'
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.neighborhood}
              inputLabel='Bairro'
              isRequired
              isInvalid={!!(validation.errors.neighborhood && validation.touched.neighborhood)}
              errorMessage={validation.errors.neighborhood || validation.errors.neighborhood}
            />
          </Grid>

          <Grid item xs={6}>
            <TextInput
              inputIdentifier='street'
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.street}
              inputLabel='Rua'
              isRequired
              isInvalid={!!(validation.errors.street && validation.touched.street)}
              errorMessage={validation.errors.street || validation.errors.street}
            />
          </Grid>

          <Grid item xs={6} sm={2}>
            <TextInput
              inputIdentifier='number'
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.number}
              inputLabel='Número'
              isRequired
              isInvalid={!!(validation.errors.number && validation.touched.number)}
              errorMessage={validation.errors.number || validation.errors.number}
            />
          </Grid>

          <Grid item xs={12} sm={10}>
            <TextInput
              inputIdentifier='complement'
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.complement}
              inputLabel='Complemento'
              isRequired
              isInvalid={!!(validation.errors.complement && validation.touched.complement)}
              errorMessage={validation.errors.complement || validation.errors.complement}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end', mt: 5 }}>
            <Button type='reset' variant='outlined' color='secondary' sx={{ mr: 3 }}>
              Cancelar
            </Button>

            <Button variant='contained' disabled={isSubmitButtonDisabled}>
              Salvar
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </form>
  )
}

export default ThirdTabContent
