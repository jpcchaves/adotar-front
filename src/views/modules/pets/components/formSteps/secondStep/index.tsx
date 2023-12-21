import { Grid, Typography } from '@mui/material'
import AutocompleteInput from 'src/@core/components/inputs/components/autocomplete'
import { generateMenuItems } from 'src/utils/common/menuItems/generateMenuItems'
import { steps } from '../../../data/formSteps'
import { FormStepProps } from '../../../models/formStepsProps'
import { getSelectedPetType } from '../../../utils/petBreeds/getSelectedPetType'
import FormStepControls from '../../formStepsControls'

interface IProps extends FormStepProps {
  activeStep: number
  handleBack: () => void
}

const SecondStep = ({ validation, activeStep, handleBack }: IProps) => {
  const breedsByPetType = getSelectedPetType(validation.values.typeId)
  console.log(validation.errors)

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
        <AutocompleteInput
          inputIdentifier='breedId'
          validation={validation}
          menuItems={generateMenuItems(breedsByPetType)}
          value={validation.values.breedId}
          inputLabel='Raça'
          isRequired
          isInvalid={!!(validation.errors.breedId && validation.touched.breedId)}
          errorMessage={validation.errors.breedId?.value || validation.errors.breedId}
        />
      </Grid>

      <FormStepControls activeStep={activeStep} handleBack={handleBack} />
    </Grid>
  )
}

export default SecondStep
