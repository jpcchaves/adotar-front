import { FormikValues } from 'formik'
import { ObjectUtils } from 'src/utils/common/objectUtils/ObjectUtils'
import { getFormInitialValuesArr } from '../../data/formInitialValues'

export const isActiveStepEqualsToIndex = (activeStep: number, index: number) => {
  return activeStep === index
}

const commonKeysObject = <T>(obj1: Record<string, T>, obj2: Record<string, T>): Record<string, T> => {
  const commonKeys = Object.keys(obj1).filter(key => key in obj2)

  const result: Record<string, T> = commonKeys.reduce((acc, key) => {
    //@ts-ignore
    acc[key] = obj1[key]

    return acc
  }, {})

  return result
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
