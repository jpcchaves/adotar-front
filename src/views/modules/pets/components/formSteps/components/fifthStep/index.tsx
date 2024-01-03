import { Grid, Typography } from '@mui/material'
import { FormStepProps } from 'src/views/modules/pets/models/formStepsProps'
import FormStepControls from '../../../formStepsControls'
import TextPreviewField from '../../../textPreviewField'

interface IProps extends FormStepProps {
  activeStep: number
  handleBack: () => void
}

const FifthStep = ({ validation, activeStep, handleBack }: IProps) => {
  const { name, typeId, gender, size, healthCondition } = validation.values

  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant='h5' sx={{ fontWeight: 600, color: 'text.primary', textDecoration: 'underline' }}>
            Dados
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='overline'>Nome</Typography>
          <TextPreviewField defaultValue={name} />
        </Grid>
        <Grid item xs={4}>
          <Typography variant='overline'>Tipo</Typography>
          <TextPreviewField defaultValue={typeId?.label} />
        </Grid>
        <Grid item xs={4}>
          <Typography variant='overline'>Sexo</Typography>
          <TextPreviewField defaultValue={gender?.label} />
        </Grid>
        <Grid item xs={4}>
          <Typography variant='overline'>Tamanho</Typography>
          <TextPreviewField defaultValue={size?.label} />
        </Grid>
        <Grid item xs={4}>
          <Typography variant='overline'>Estado de Saúde</Typography>
          <TextPreviewField defaultValue={healthCondition?.label} />
        </Grid>

        <Grid item xs={12}>
          <Typography variant='h5' sx={{ fontWeight: 600, color: 'text.primary' }}>
            Detalhes
          </Typography>
          <Typography variant='h5' sx={{ fontWeight: 600, color: 'text.primary' }}>
            Endereço
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h5' sx={{ fontWeight: 600, color: 'text.primary' }}>
            Fotos
          </Typography>
        </Grid>

        <FormStepControls activeStep={activeStep} handleBack={handleBack} />
      </Grid>
    </>
  )
}

export default FifthStep
