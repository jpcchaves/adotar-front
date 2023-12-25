import { Grid, Typography } from '@mui/material'
import { FormikValues } from 'formik'
import { useEffect, useState } from 'react'
import { SelectInput, ZipcodeInput } from 'src/@core/components/inputs'
import { generateCitiesMenuItems } from 'src/utils/common/menuItems/generateMenuItems'
import { HttpMethod, httpRequest } from 'src/utils/http'
import { steps } from '../../../data/formSteps'
import { states } from '../../../data/geolocation/states'
import FormStepControls from '../../formStepsControls'

interface IProps {
  activeStep: number
  validation: FormikValues
  handleBack: () => void
}

const ThirdStep = ({ activeStep, validation, handleBack }: IProps) => {
  const [selectedCities, setSelectedCities] = useState([])

  useEffect(() => {
    const getCitiesByState = async () => {
      if (validation.values.state) {
        await httpRequest<any, any>(HttpMethod.GET, `/v1/cities?stateId=${validation.values.state}`)
          .then(res => {
            setSelectedCities(res)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }

    getCitiesByState()
  }, [validation.values.state])

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
          {steps[activeStep].title}
        </Typography>
        <Typography variant='caption' component='p'>
          {steps[activeStep].subtitle}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <ZipcodeInput
          inputIdentifier='zipcode'
          onChange={e => {
            validation.handleChange(e)
          }}
          onBlur={validation.handleBlur}
          value={validation.values.zipcode}
          inputLabel='CEP'
          isRequired
          isInvalid={!!(validation.errors.zipcode && validation.touched.zipcode)}
          errorMessage={validation.errors.zipcode}
          setFieldValue={validation.setFieldValue}
        />
      </Grid>
      <Grid item xs={4}>
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
      <Grid item xs={4}>
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

      <FormStepControls activeStep={activeStep} handleBack={handleBack} />
    </Grid>
  )
}

export default ThirdStep
