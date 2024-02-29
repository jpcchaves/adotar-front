import { Grid } from '@mui/material'
import { FormikValues } from 'formik'
import { SelectInput, TextInput, ZipcodeInput } from 'src/@core/components/inputs'
import { GenerateCitiesMenuItems } from 'src/utils/common/menuItems/generateMenuItems'
import FormStepHeader from '../../../formStepHeader'
import useGetSelectedCities from '../../hooks/useGetSelectedCities'
import { clearCityInput } from '../../utils/clearCityInput'
import { useGetStatesData } from 'src/views/modules/pets/data/geolocation/states'

interface IProps {
  activeStep: number
  validation: FormikValues
}

const ThirdStep = ({ activeStep, validation }: IProps) => {
  const { selectedCities } = useGetSelectedCities({ validation })

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <FormStepHeader activeStep={activeStep} />
      </Grid>

      <Grid item xs={6} sm={4}>
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

      <Grid item xs={6} sm={4}>
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
          menuItems={GenerateCitiesMenuItems(selectedCities)}
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
    </Grid>
  )
}

export default ThirdStep
