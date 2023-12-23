import { Grid, Typography } from '@mui/material'
import { SelectInput, TextInput } from 'src/@core/components/inputs'
import AutocompleteInput from 'src/@core/components/inputs/components/autocomplete'
import SelectMulti from 'src/@core/components/inputs/components/selectMulti'
import { generateMenuItems } from 'src/utils/common/menuItems/generateMenuItems'
import { monthsAgeOptions, yearsAgeOptions } from '../../../data/age/ageOptions'
import { petCharacteristics } from '../../../data/characteristics'
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
      <Grid item xs={4}>
        <TextInput
          inputIdentifier='color'
          onChange={validation.handleChange}
          onBlur={validation.handleBlur}
          value={validation.values.color}
          inputLabel='Cor'
          isRequired
          isInvalid={!!(validation.errors.color && validation.touched.color)}
          errorMessage={validation.errors.color}
        />
      </Grid>

      <Grid item xs={2}>
        <SelectInput
          inputIdentifier='yearsAge'
          inputLabel={'Anos'}
          isRequired
          isInvalid={!!(validation.errors.yearsAge && validation.touched.yearsAge)}
          errorMessage={validation.errors.yearsAge}
          onChange={e => {
            validation.handleChange(e)
          }}
          onBlur={validation.handleBlur}
          value={validation.values.yearsAge}
          menuItems={yearsAgeOptions}
        />
      </Grid>
      <Grid item xs={2}>
        <SelectInput
          inputIdentifier='monthsAge'
          inputLabel={'Meses'}
          isRequired
          isInvalid={!!(validation.errors.monthsAge && validation.touched.monthsAge)}
          errorMessage={validation.errors.monthsAge}
          onChange={e => {
            validation.handleChange(e)
          }}
          onBlur={validation.handleBlur}
          value={validation.values.monthsAge}
          menuItems={monthsAgeOptions}
        />
      </Grid>

      <Grid item xs={12}>
        <TextInput
          multiline
          rows={6}
          inputIdentifier='description'
          inputLabel={'Descrição'}
          placeholder='Forneça informações sobre o Pet. Sua personalidade, comportamento, necessidades especiais (se houver), e qualquer outra informação relevante que possa ajudar a entender melhor as necessidades do animal.'
          isRequired
          isInvalid={!!(validation.errors.description && validation.touched.description)}
          errorMessage={validation.errors.description}
          onChange={validation.handleChange}
          onBlur={validation.handleBlur}
          value={validation.values.description}
        />
      </Grid>

      <Grid item xs={12}>
        <SelectMulti
          inputIdentifier='characteristicsIds'
          validation={validation}
          menuItems={petCharacteristics}
          value={validation.values.characteristicsIds}
          inputLabel='Caracteristicas'
          isRequired
          isInvalid={!!(validation.errors.characteristicsIds && validation.touched.characteristicsIds)}
          errorMessage={validation.errors.characteristicsIds}
        />
      </Grid>

      <FormStepControls activeStep={activeStep} handleBack={handleBack} />
    </Grid>
  )
}

export default SecondStep
