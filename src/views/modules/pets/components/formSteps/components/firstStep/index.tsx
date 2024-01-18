import { Grid } from '@mui/material'
import { SelectInput, TextInput } from 'src/@core/components/inputs'
import { genderMenuItems } from '../../../../data/genderMenuItems'
import { petHealthConditionMenuItems } from '../../../../data/petHealthConditionMenuItems'
import { petSizeMenuItems } from '../../../../data/petSizeMenuItems'
import { petTypeMenuItems } from '../../../../data/petTypeMenuItems'
import { FormStepProps } from '../../../../models/formStepsProps'
import FormStepHeader from '../../../formStepHeader'

interface IProps extends FormStepProps {
  activeStep: number
}

const FirstStep = ({ validation, activeStep }: IProps) => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <FormStepHeader activeStep={activeStep} />
      </Grid>
      <Grid item xs={12}>
        <TextInput
          inputIdentifier='name'
          inputLabel={'Nome'}
          isRequired
          isInvalid={!!(validation.errors.name && validation.touched.name)}
          errorMessage={validation.errors.name}
          value={validation.values.name}
          onBlur={validation.handleBlur}
          onChange={validation.handleChange}
        />
      </Grid>
      <Grid item xs={6}>
        <SelectInput
          inputIdentifier='typeId'
          inputLabel={'Tipo'}
          isRequired
          isInvalid={!!((validation.errors.typeId?.value || validation.errors?.typeId) && validation.touched.typeId)}
          errorMessage={validation.errors.typeId?.value || validation.errors?.typeId}
          setFieldValue={validation.setFieldValue}
          value={validation.values.typeId?.value}
          onBlur={validation.handleBlur}
          menuItems={petTypeMenuItems}
        />
      </Grid>
      <Grid item xs={6}>
        <SelectInput
          inputIdentifier='gender'
          inputLabel={'Sexo'}
          isRequired
          isInvalid={!!((validation.errors.gender?.value || validation.errors?.gender) && validation.touched.gender)}
          errorMessage={validation.errors.gender?.value || validation.errors?.gender}
          setFieldValue={validation.setFieldValue}
          onBlur={validation.handleBlur}
          value={validation.values.gender?.value}
          menuItems={genderMenuItems}
        />
      </Grid>
      <Grid item xs={6}>
        <SelectInput
          inputIdentifier='size'
          inputLabel={'Tamanho'}
          isRequired
          isInvalid={!!((validation.errors.size?.value || validation.errors?.size) && validation.touched.size)}
          errorMessage={validation.errors.size?.value || validation.errors?.size}
          setFieldValue={validation.setFieldValue}
          onBlur={validation.handleBlur}
          value={validation.values.size?.value}
          menuItems={petSizeMenuItems}
        />
      </Grid>
      <Grid item xs={6}>
        <SelectInput
          inputIdentifier='healthCondition'
          inputLabel={'Estado de Saúde'}
          isRequired
          isInvalid={
            !!(
              (validation.errors.healthCondition?.value || validation.errors?.healthCondition) &&
              validation.touched.healthCondition
            )
          }
          errorMessage={validation.errors.healthCondition?.value || validation.errors?.healthCondition}
          setFieldValue={validation.setFieldValue}
          onBlur={validation.handleBlur}
          value={validation.values.healthCondition?.value}
          menuItems={petHealthConditionMenuItems}
        />
      </Grid>
    </Grid>
  )
}

export default FirstStep
