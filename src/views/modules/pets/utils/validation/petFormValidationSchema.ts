import * as Yup from 'yup'

export const petFormValidationSchema = [
  // Step one
  Yup.object({
    typeId: Yup.string().required('O campo e obrigatorio'),
    name: Yup.string().required('O campo e obrigatorio'),
    gender: Yup.string().required('O campo e obrigatorio'),
    size: Yup.string().required('O campo e obrigatorio'),
    healthCondition: Yup.string().required('O campo e obrigatorio')
  }),

  // Step two
  Yup.object({
    breedId: Yup.string().required('O campo e obrigatorio'),
    color: Yup.string().required('O campo e obrigatorio'),
    yearsAge: Yup.string().required('O campo e obrigatorio'),
    monthsAge: Yup.string().required('O campo e obrigatorio'),
    description: Yup.string().required('O campo e obrigatorio'),
    characteristicsIds: Yup.mixed().when('isArray', {
      is: Array.isArray,
      then: Yup.array().of(Yup.string()),
      otherwise: Yup.string()
    })
  }),

  // Step three
  Yup.object({
    zipcode: Yup.string().required('O campo e obrigatorio'),
    street: Yup.string().required('O campo e obrigatorio'),
    number: Yup.string().required('O campo e obrigatorio'),
    complement: Yup.string().required('O campo e obrigatorio'),
    neighborhood: Yup.string().required('O campo e obrigatorio'),
    cityId: Yup.string().required('O campo e obrigatorio')
  })
]
