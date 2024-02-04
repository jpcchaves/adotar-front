import * as Yup from 'yup'

export const updatePasswordValidation = Yup.object({
  currentPassword: Yup.string().min(6, 'A senha precisar ter no mínimo 6 caracteres').required('O campo é obrigatório'),
  newPassword: Yup.string().min(6, 'A senha precisar ter no mínimo 6 caracteres').required('O campo é obrigatório'),
  confirmNewPassword: Yup.string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres')
    .oneOf([Yup.ref('newPassword'), null], 'As senhas devem coincidir')
    .required('O campo é obrigatório')
})
