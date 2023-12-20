import { FormikValues } from 'formik'
import { ObjectUtils } from 'src/utils/common/objectUtils/ObjectUtils'
import { keysArrays } from '../../data/formStepsKeys'

export const isActiveStepEqualsToIndex = (activeStep: number, index: number) => {
  return activeStep === index
}

export const shouldSetFormError = (
  validation: FormikValues,
  activeStep: number,
  index: number,
  labelProps: {
    error?: boolean | undefined
  }
) => {
  const { errors, touched } = validation

  if (
    !ObjectUtils.isEmpty(errors) &&
    !ObjectUtils.isEmpty(touched) &&
    ObjectUtils.hasAllKeys(validation.touched, keysArrays[activeStep]) &&
    isActiveStepEqualsToIndex(activeStep, index)
  ) {
    labelProps.error = true
  } else {
    labelProps.error = false
  }
}
