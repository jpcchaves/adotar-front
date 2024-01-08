import LoadingButton from '@mui/lab/LoadingButton'
import { Box, Button, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import { steps } from '../../data/formSteps'

interface IProps {
  activeStep: number
  handleBack?: () => void
  isLoading: boolean
}

/* eslint-disable @typescript-eslint/no-empty-function */
const FormStepControls = ({ activeStep, handleBack = () => {}, isLoading }: IProps) => {
  const router = useRouter()

  const firstStepIndex = 0
  const lastStepIndex = steps.length - 1

  const currentStepIndex = activeStep
  const isFirstStep = currentStepIndex === firstStepIndex
  const isLastStep = currentStepIndex === lastStepIndex

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        spacing={5}
        sx={{ display: 'flex', justifyContent: isFirstStep ? 'flex-end' : 'space-between', mt: 5 }}
      >
        {!isFirstStep && (
          <Button
            size='large'
            variant='outlined'
            color='secondary'
            disabled={isLoading || isFirstStep}
            onClick={handleBack}
          >
            Voltar
          </Button>
        )}
        <Box>
          <Button
            size='large'
            type='button'
            disabled={isLoading}
            variant='text'
            onClick={() => router.back()}
            sx={{ marginRight: '10px' }}
          >
            Cancelar
          </Button>
          <LoadingButton loading={isLoading} size='large' type='submit' variant='contained' disabled={isLoading}>
            {isLastStep ? 'Enviar' : 'Próximo'}
          </LoadingButton>
        </Box>
      </Grid>
    </Grid>
  )
}

export default FormStepControls
