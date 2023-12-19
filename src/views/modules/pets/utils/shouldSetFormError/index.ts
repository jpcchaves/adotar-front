import { FormikValues } from 'formik'
import { ObjectUtils } from 'src/utils/common/objectUtils/ObjectUtils'

export const isActiveStepEqualsToIndex = (activeStep: number, index: number) => {
  return activeStep === index
}

const hasBeenSubmitted = (submitCount: number) => {
  return submitCount > 0
}

export const shouldSetFormError = (
  validation: FormikValues,
  activeStep: number,
  index: number,
  labelProps: {
    error?: boolean | undefined
  }
) => {
  const { errors, touched, submitCount } = validation

  if (
    !ObjectUtils.isEmpty(errors) &&
    !ObjectUtils.isEmpty(touched) &&
    hasBeenSubmitted(submitCount) &&
    isActiveStepEqualsToIndex(activeStep, index)
  ) {
    labelProps.error = true
  } else {
    labelProps.error = false
  }
}
