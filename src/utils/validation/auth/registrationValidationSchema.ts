import * as Yup from 'yup'

export const registrationValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('O campo é obrigatório'),
  lastName: Yup.string().required('O campo é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('O campo é obrigatório'),
  password: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('O campo é obrigatório'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'As senhas devem coincidir')
    .required('O campo é obrigatório')
})
