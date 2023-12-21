import { Grid, TextField, Typography } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import FormFeedback from 'src/@core/components/formFeedback'
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
        <Autocomplete
          options={generateMenuItems(breedsByPetType)}
          value={validation.values.breedId}
          onChange={(e, newValue) => {
            validation.setFieldValue('breedId', newValue)
          }}
          onBlur={validation.handleBlur}
          id='breedId'
          renderInput={params => {
            return (
              <TextField
                error={!!(validation.errors.breedId?.value && validation.touched.breedId)}
                {...params}
                label='Raça'
              />
            )
          }}
        />
        {!!(validation.errors.breedId?.value && validation.touched.breedId) && (
          <FormFeedback errorMessage={validation.errors.breedId.value} />
        )}
      </Grid>

      <FormStepControls activeStep={activeStep} handleBack={handleBack} />
    </Grid>
  )
}

export default SecondStep
