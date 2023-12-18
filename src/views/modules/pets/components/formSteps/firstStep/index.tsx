import { Grid, Typography } from '@mui/material'
import TextInput from 'src/@core/components/inputs/textInput'
import { steps } from '../../../data/formSteps'
import { FormStepProps } from '../../../models/formStepsProps'
import FormStepControls from '../../formStepsControls'

interface IProps extends FormStepProps {
  activeStep: number
}

const FirstStep = ({ validation, activeStep }: IProps) => {
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
      <Grid item xs={12} sm={6}>
        <TextInput
          inputIdentifier='test'
          inputLabel={'Test'}
          onChange={validation.handleChange}
          onBlur={validation.handleBlur}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextInput
          inputIdentifier='test'
          inputLabel={'Test'}
          onChange={validation.handleChange}
          onBlur={validation.handleBlur}
        />
      </Grid>
      <FormStepControls activeStep={activeStep} />
    </Grid>
  )
}

export default FirstStep
