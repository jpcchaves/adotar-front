import { FormikValues } from 'formik'
import { ObjectUtils } from 'src/utils/common/objectUtils/ObjectUtils'
import { getFormInitialValuesArr } from '../../data/formInitialValues'
import { commonKeysObject } from '../commonKeysObject'

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

  // @ts-ignore
  const currentStepErrors = commonKeysObject(errors, getFormInitialValuesArr()[activeStep])

  if (
    !ObjectUtils.isEmpty(errors) &&
    !ObjectUtils.isEmpty(touched) &&
    ObjectUtils.isAnyErrorTouched(currentStepErrors, touched) &&
    isActiveStepEqualsToIndex(activeStep, index)
  ) {
    labelProps.error = true
  } else {
    labelProps.error = false
  }
}
