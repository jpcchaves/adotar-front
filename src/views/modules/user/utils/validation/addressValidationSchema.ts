import { cepValidation } from 'src/views/modules/pets/utils/validation/zipcodeValidation'
import * as Yup from 'yup'

export const addressValidationSchema = Yup.object({
  zipcode: cepValidation.required('O campo é obrigatório'),
  street: Yup.string().required('O campo é obrigatório'),
  number: Yup.string().required('O campo é obrigatório'),
  complement: Yup.string().required('O campo é obrigatório'),
  neighborhood: Yup.string().required('O campo é obrigatório'),
  city: Yup.object()
    .shape({
      value: Yup.string().required('O campo é obrigatório')
    })
    .nullable()
    .required('O campo é obrigatório'),
  state: Yup.object()
    .shape({
      value: Yup.string().required('O campo é obrigatório')
    })
    .nullable()
    .required('O campo é obrigatório')
})
