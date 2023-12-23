import { Button, Grid } from '@mui/material'
import { steps } from '../../data/formSteps'

interface IProps {
  activeStep: number
  handleBack?: () => void
}

/* eslint-disable @typescript-eslint/no-empty-function */
const FormStepControls = ({ activeStep, handleBack = () => {} }: IProps) => {
  const firstStepIndex = 0
  const lastStepIndex = steps.length - 1

  const currentStepIndex = activeStep
  const isFirstStep = currentStepIndex === firstStepIndex
  const isLastStep = currentStepIndex === lastStepIndex

  return (
    <Grid item xs={12} sx={{ display: 'flex', justifyContent: isFirstStep ? 'flex-end' : 'space-between' }}>
      {!isFirstStep && (
        <Button size='large' variant='outlined' color='secondary' disabled={isFirstStep} onClick={handleBack}>
          Voltar
        </Button>
      )}
      <Button size='large' type='submit' variant='contained'>
        {isLastStep ? 'Enviar' : 'Próximo'}
      </Button>
    </Grid>
  )
}

export default FormStepControls
