import { Grid, Typography } from '@mui/material'
import { SelectInput, TextInput } from 'src/@core/components/inputs'
import AutocompleteInput from 'src/@core/components/inputs/components/autocomplete'
import SelectMulti from 'src/@core/components/inputs/components/selectMulti'
import { generateMenuItems } from 'src/utils/common/menuItems/generateMenuItems'
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
  console.log(validation.errors)
  console.log(validation.values)

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
          errorMessage={validation.errors.color || validation.errors.color}
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
          menuItems={[
            { value: '0', label: '0' },
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
            { value: '8', label: '8' },
            { value: '9', label: '9' },
            { value: '10', label: '10' },
            { value: '11', label: '11' },
            { value: '12', label: '12' },
            { value: '13', label: '13' },
            { value: '14', label: '14' },
            { value: '15', label: '15' },
            { value: '16', label: '16' },
            { value: '17', label: '17' },
            { value: '18', label: '18' },
            { value: '19', label: '19' },
            { value: '20', label: '20' },
            { value: '21', label: '21' },
            { value: '22', label: '22' },
            { value: '23', label: '23' },
            { value: '24', label: '24' },
            { value: '25', label: '25' },
            { value: '26', label: '26' },
            { value: '27', label: '27' },
            { value: '28', label: '28' },
            { value: '29', label: '29' },
            { value: '30', label: '30' }
          ]}
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
          menuItems={[
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
            { value: '8', label: '8' },
            { value: '9', label: '9' },
            { value: '10', label: '10' },
            { value: '11', label: '11' }
          ]}
        />
      </Grid>

      <Grid item xs={12}>
        <TextInput
          multiline
          rows={6}
          inputIdentifier='description'
          inputLabel={'Descricao'}
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
