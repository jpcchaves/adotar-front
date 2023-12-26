import * as Yup from 'yup'

export const cepValidation = Yup.string().test('is-brazilian-cep', 'CEP inválido', value => {
  if (!value) {
    return true
  }

  const cleanedValue = value.replace(/\D/g, '')

  return cleanedValue.length === 8
})
