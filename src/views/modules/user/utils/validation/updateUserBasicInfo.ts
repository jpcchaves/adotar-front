import * as Yup from 'yup'

export const updateUserBasicInfoValidation = Yup.object({
  firstName: Yup.string().required('O campo é obrigatório'),
  lastName: Yup.string().required('O campo é obrigatório')
})
