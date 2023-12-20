import { stepOneInitialValues, stepThreeInitialValues, stepTwoInitialValues } from '../formInitialValues'

export const keysStepOne = Object.keys(stepOneInitialValues())
export const keysStepTwo = Object.keys(stepTwoInitialValues())
export const keysStepThree = Object.keys(stepThreeInitialValues())

export const keysArrays: string[][] = [keysStepOne, keysStepTwo, keysStepThree]
