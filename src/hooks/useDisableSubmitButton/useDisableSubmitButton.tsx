import { FormikValues } from 'formik'

interface IProps {
  validation: FormikValues
}

const useDisableSubmitButton = ({ validation }: IProps) => {
  const isFormNotTouched = Object.keys(validation.touched).length === 0
  const doesTouchExists = validation.touched.constructor === Object
  const isSubtmitButtonDisableByTouched = isFormNotTouched && doesTouchExists

  const isFormValid = validation.isValid

  const isSubmitButtonDisabled = !isFormValid || isSubtmitButtonDisableByTouched

  return { isSubmitButtonDisabled }
}

export default useDisableSubmitButton
