import * as Yup from 'yup'
import { cepValidation } from './zipcodeValidation'

export const petFormValidationSchema = [
  // Step one
  Yup.object({
    typeId: Yup.string().required('O campo é obrigatório'),
    name: Yup.string().required('O campo é obrigatório'),
    gender: Yup.string().required('O campo é obrigatório'),
    size: Yup.string().required('O campo é obrigatório'),
    healthCondition: Yup.string().required('O campo é obrigatório')
  }),

  // Step two
  Yup.object({
    breedId: Yup.object()
      .shape({
        value: Yup.string().required('O campo é obrigatório'),
        label: Yup.string().required('O campo é obrigatório')
      })
      .nullable()
      .required('O campo é obrigatório'),
    color: Yup.string().required('O campo é obrigatório'),
    yearsAge: Yup.string().required('O campo é obrigatório'),
    monthsAge: Yup.string().required('O campo é obrigatório'),
    description: Yup.string().required('O campo é obrigatório'),
    characteristicsIds: Yup.array()
      .min(1, 'Selecione no mínimo 1 caracteristica')
      .max(5, 'Selecione no máximo 5 caracteristicas')
  }),

  // Step three
  Yup.object({
    zipcode: cepValidation.required('O campo é obrigatório'),
    street: Yup.string().required('O campo é obrigatório'),
    number: Yup.string().required('O campo é obrigatório'),
    complement: Yup.string().required('O campo é obrigatório'),
    neighborhood: Yup.string().required('O campo é obrigatório'),
    city: Yup.object()
      .shape({
        value: Yup.string().required('O campo é obrigatório'),
        label: Yup.string().required('O campo é obrigatório')
      })
      .nullable()
      .required('O campo é obrigatório')
  })
]
