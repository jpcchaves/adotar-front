import { FormikValues } from 'formik'

const CITY_INPUT_INITIAL_VALUE = {
  value: '',
  label: ''
}

export const clearCityInput = (validation: FormikValues, cityInputName: string = 'city') => {
  validation.setFieldValue(cityInputName, CITY_INPUT_INITIAL_VALUE)
}
