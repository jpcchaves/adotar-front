import { Grid } from '@mui/material'
import { FormikValues } from 'formik'
import { SelectInput, TextInput, ZipcodeInput } from 'src/@core/components/inputs'
import { generateCitiesMenuItems } from 'src/utils/common/menuItems/generateMenuItems'
import { states } from '../../../../data/geolocation/states'
import FormStepHeader from '../../../formStepHeader'
import FormStepControls from '../../../formStepsControls'
import useGetSelectedCities from '../../hooks/useGetSelectedCities'

interface IProps {
  activeStep: number
  validation: FormikValues
  handleBack: () => void
}

const ThirdStep = ({ activeStep, validation, handleBack }: IProps) => {
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
          onChange={e => {
            validation.handleChange(e)
          }}
          onBlur={validation.handleBlur}
          value={validation.values.state}
          inputLabel='Estado'
          isRequired
          isInvalid={!!(validation.errors.state && validation.touched.state)}
          errorMessage={validation.errors.state || validation.errors.state}
          menuItems={states}
          disabled={!validation.values.zipcode}
        />
      </Grid>

      <Grid item xs={6} sm={4}>
        <SelectInput
          inputIdentifier='city'
          onChange={e => {
            validation.handleChange(e)
          }}
          onBlur={validation.handleBlur}
          value={validation.values.city}
          inputLabel='Cidade'
          isRequired
          isInvalid={!!(validation.errors.city && validation.touched.city)}
          errorMessage={validation.errors.city || validation.errors.city}
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

      <FormStepControls activeStep={activeStep} handleBack={handleBack} />
    </Grid>
  )
}

export default ThirdStep
