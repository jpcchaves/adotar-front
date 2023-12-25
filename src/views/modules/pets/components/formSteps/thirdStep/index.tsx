import { Grid, Typography } from '@mui/material'
import { FormikValues } from 'formik'
import { ZipcodeInput } from 'src/@core/components/inputs'
import { steps } from '../../../data/formSteps'
import FormStepControls from '../../formStepsControls'

interface IProps {
  activeStep: number
  validation: FormikValues
  handleBack: () => void
}

const ThirdStep = ({ activeStep, validation, handleBack }: IProps) => {
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
          onChange={validation.handleChange}
          onBlur={validation.handleBlur}
          value={validation.values.zipcode}
          inputLabel='CEP'
          isRequired
          isInvalid={!!(validation.errors.zipcode && validation.touched.zipcode)}
          errorMessage={validation.errors.zipcode}
        />
      </Grid>

      <FormStepControls activeStep={activeStep} handleBack={handleBack} />
    </Grid>
  )
}

export default ThirdStep
