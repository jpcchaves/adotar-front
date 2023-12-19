import * as Yup from 'yup'

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
    breedId: Yup.string().required('O campo é obrigatório'),
    color: Yup.string().required('O campo é obrigatório'),
    yearsAge: Yup.string().required('O campo é obrigatório'),
    monthsAge: Yup.string().required('O campo é obrigatório'),
    description: Yup.string().required('O campo é obrigatório'),
    characteristicsIds: Yup.mixed().when('isArray', {
      is: Array.isArray,
      then: Yup.array().of(Yup.string()),
      otherwise: Yup.string()
    })
  }),

  // Step three
  Yup.object({
    zipcode: Yup.string().required('O campo é obrigatório'),
    street: Yup.string().required('O campo é obrigatório'),
    number: Yup.string().required('O campo é obrigatório'),
    complement: Yup.string().required('O campo é obrigatório'),
    neighborhood: Yup.string().required('O campo é obrigatório'),
    cityId: Yup.string().required('O campo é obrigatório')
  })
]
