import { Grid } from '@mui/material'
import { SelectInput, SelectMulti, TextInput } from 'src/@core/components/inputs'
import AutocompleteInput from 'src/@core/components/inputs/components/autocomplete'
import { generateMenuItems } from 'src/utils/common/menuItems/generateMenuItems'
import { useGetAgeOptions } from 'src/views/modules/pets/data/age/ageOptions'
import { petCharacteristics } from '../../../../data/characteristics'
import { FormStepProps } from '../../../../models/formStepsProps'
import { GetSelectedPetType } from '../../../../utils/petBreeds/getSelectedPetType'
import FormStepHeader from '../../../formStepHeader'

interface IProps extends FormStepProps {
  activeStep: number
}

const SecondStep = ({ validation, activeStep }: IProps) => {
  const breedsByPetType = GetSelectedPetType(validation.values.typeId?.value)
  const DESCRIPTION_CHAR_COUNT = validation.values?.description?.length || 0
  const DESCRIPTION_CHAR_LIMIT = 250

  const { monthsAgeOptions, yearsAgeOptions } = useGetAgeOptions()

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <FormStepHeader activeStep={activeStep} />
      </Grid>
      <Grid item xs={6} sm={4}>
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
      <Grid item xs={6} sm={4}>
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

      <Grid item xs={6} sm={2}>
        <SelectInput
          inputIdentifier='yearsAge'
          inputLabel={'Anos'}
          isRequired
          isInvalid={
            !!((validation.errors.yearsAge?.value || validation.errors?.yearsAge) && validation.touched.yearsAge)
          }
          errorMessage={validation.errors.yearsAge?.value || validation.errors?.yearsAge}
          setFieldValue={validation.setFieldValue}
          value={validation.values.yearsAge?.value}
          onBlur={validation.handleBlur}
          menuItems={yearsAgeOptions}
        />
      </Grid>
      <Grid item xs={6} sm={2}>
        <SelectInput
          inputIdentifier='monthsAge'
          inputLabel={'Meses'}
          isRequired
          isInvalid={
            !!((validation.errors.monthsAge?.value || validation.errors?.monthsAge) && validation.touched.monthsAge)
          }
          errorMessage={validation.errors.monthsAge?.value || validation.errors?.monthsAge}
          setFieldValue={validation.setFieldValue}
          value={validation.values.monthsAge?.value}
          onBlur={validation.handleBlur}
          menuItems={monthsAgeOptions}
        />
      </Grid>

      <Grid item xs={12}>
        <TextInput
          multiline
          rows={4}
          inputIdentifier='description'
          inputLabel={'Descrição'}
          placeholder='Forneça informações sobre o Pet. Sua personalidade, comportamento, necessidades especiais (se houver), e qualquer outra informação relevante que possa ajudar a entender melhor as necessidades do animal.'
          isRequired
          isInvalid={!!(validation.errors.description && validation.touched.description)}
          errorMessage={validation.errors.description}
          onChange={validation.handleChange}
          onBlur={validation.handleBlur}
          value={validation.values.description}
          characterLimit={`${DESCRIPTION_CHAR_COUNT}/${DESCRIPTION_CHAR_LIMIT}`}
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
    </Grid>
  )
}

export default SecondStep
