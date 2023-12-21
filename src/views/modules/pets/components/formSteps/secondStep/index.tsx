import { Grid, Typography } from '@mui/material'
import { SelectInput } from 'src/@core/components/inputs'
import { steps } from '../../../data/formSteps'
import { petTypeMenuItems } from '../../../data/petTypeMenuItems'
import { FormStepProps } from '../../../models/formStepsProps'
import FormStepControls from '../../formStepsControls'

interface IProps extends FormStepProps {
  activeStep: number
  handleBack: () => void
}

const SecondStep = ({ validation, activeStep, handleBack }: IProps) => {
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
      <Grid item xs={3}>
        <SelectInput
          inputIdentifier='breedId'
          inputLabel={'Raça'}
          isRequired
          isInvalid={!!(validation.errors.breedId && validation.touched.breedId)}
          errorMessage={validation.errors.breedId}
          onChange={e => {
            validation.handleChange(e)
          }}
          onBlur={validation.handleBlur}
          value={validation.values.breedId}
          menuItems={petTypeMenuItems}
        />
      </Grid>

      <FormStepControls activeStep={activeStep} handleBack={handleBack} />
    </Grid>
  )
}

export default SecondStep
