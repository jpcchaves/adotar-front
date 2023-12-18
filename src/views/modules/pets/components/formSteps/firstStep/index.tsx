import { Grid, Typography } from '@mui/material'
import { SelectInput, TextInput } from 'src/@core/components/inputs'
import { steps } from '../../../data/formSteps'
import { genderMenuItems } from '../../../data/genderMenuItems'
import { petHealthConditionMenuItems } from '../../../data/petHealthConditionMenuItems'
import { petSizeMenuItems } from '../../../data/petSizeMenuItems'
import { petTypeMenuItems } from '../../../data/petTypeMenuItems'
import { FormStepProps } from '../../../models/formStepsProps'
import FormStepControls from '../../formStepsControls'

interface IProps extends FormStepProps {
  activeStep: number
}

const FirstStep = ({ validation, activeStep }: IProps) => {
  return (
    <Grid container spacing={10}>
      <Grid item xs={12}>
        <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
          {steps[activeStep].title}
        </Typography>
        <Typography variant='caption' component='p'>
          {steps[activeStep].subtitle}
        </Typography>
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
          isInvalid={!!(validation.errors.typeId && validation.touched.typeId)}
          errorMessage={validation.errors.typeId}
          onChange={e => {
            validation.handleChange(e)
          }}
          onBlur={validation.handleBlur}
          value={validation.values.typeId}
          menuItems={petTypeMenuItems}
        />
      </Grid>
      <Grid item xs={6}>
        <SelectInput
          inputIdentifier='gender'
          inputLabel={'Sexo'}
          isRequired
          isInvalid={!!(validation.errors.gender && validation.touched.gender)}
          errorMessage={validation.errors.gender}
          onChange={e => {
            validation.handleChange(e)
          }}
          onBlur={validation.handleBlur}
          value={validation.values.gender}
          menuItems={genderMenuItems}
        />
      </Grid>
      <Grid item xs={6}>
        <SelectInput
          inputIdentifier='size'
          inputLabel={'Tamanho'}
          isRequired
          isInvalid={!!(validation.errors.size && validation.touched.size)}
          errorMessage={validation.errors.size}
          onChange={e => {
            validation.handleChange(e)
          }}
          onBlur={validation.handleBlur}
          value={validation.values.size}
          menuItems={petSizeMenuItems}
        />
      </Grid>
      <Grid item xs={6}>
        <SelectInput
          inputIdentifier='healthCondition'
          inputLabel={'Estado de Saúde'}
          isRequired
          isInvalid={!!(validation.errors.healthCondition && validation.touched.healthCondition)}
          errorMessage={validation.errors.healthCondition}
          onChange={e => {
            validation.handleChange(e)
          }}
          onBlur={validation.handleBlur}
          value={validation.values.healthCondition}
          menuItems={petHealthConditionMenuItems}
        />
      </Grid>
      <FormStepControls activeStep={activeStep} />
    </Grid>
  )
}

export default FirstStep
