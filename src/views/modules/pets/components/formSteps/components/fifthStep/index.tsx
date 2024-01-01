import { Grid, Typography } from '@mui/material'
import { FormStepProps } from 'src/views/modules/pets/models/formStepsProps'
import FormStepControls from '../../../formStepsControls'

interface IProps extends FormStepProps {
  activeStep: number
}

const FifthStep = ({ validation, activeStep }: IProps) => {
  const formValues = validation.values

  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
            Dados
          </Typography>
          <Typography variant='caption' component='p'>
            Dados do Pet
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
            Detalhes
          </Typography>
          <Typography variant='caption' component='p'>
            Detalhes do Pet
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
            Endereco
          </Typography>
          <Typography variant='caption' component='p'>
            Onde esta o Pet
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
            Fotos
          </Typography>
          <Typography variant='caption' component='p'>
            Fotos do Pet
          </Typography>
        </Grid>

        <FormStepControls activeStep={activeStep} />
      </Grid>
    </>
  )
}

export default FifthStep
