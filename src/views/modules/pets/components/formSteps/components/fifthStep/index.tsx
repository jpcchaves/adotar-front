import { Grid, Typography } from '@mui/material'
import { Gender } from 'src/domain/enum/pet/Gender'
import { petHealthConditionMenuItems } from 'src/views/modules/pets/data/petHealthConditionMenuItems'
import { petSizeMenuItems } from 'src/views/modules/pets/data/petSizeMenuItems'
import { petTypeMenuItems } from 'src/views/modules/pets/data/petTypeMenuItems'
import { FormStepProps } from 'src/views/modules/pets/models/formStepsProps'
import FormStepControls from '../../../formStepsControls'

interface IProps extends FormStepProps {
  activeStep: number
}

const FifthStep = ({ validation, activeStep }: IProps) => {
  const { name, typeId, gender, size, healthCondition } = validation.values

  const animalType = petTypeMenuItems.find(petType => petType.value == typeId)
  const petGender = gender === Gender.M ? 'Macho' : 'Fêmea'
  const petSize = petSizeMenuItems.find(petSize => petSize.value == size)
  const petHealthCondition = petHealthConditionMenuItems.find(hc => hc.value == healthCondition)

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
          <Typography>{name}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='overline'>Tipo</Typography>
          <Typography>{animalType?.label}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='overline'>Sexo</Typography>
          <Typography>{petGender}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='overline'>Tamanho</Typography>
          <Typography>{petSize?.label}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='overline'>Estado de Saúde</Typography>
          <Typography>{petHealthCondition?.label}</Typography>
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

        <FormStepControls activeStep={activeStep} />
      </Grid>
    </>
  )
}

export default FifthStep
