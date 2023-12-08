import * as Yup from 'yup'

export const loginValidationSchema = Yup.object({
  email: Yup.string().email('Informe um e-mail válido').required('O campo é obrigatório'),
  password: Yup.string().required('O campo é obrigatório')
})
