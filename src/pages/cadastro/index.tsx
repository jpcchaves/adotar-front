// ** React Imports
import { ReactNode } from 'react'
import { useAuth } from 'src/hooks/useAuth'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import LoadingButton from '@mui/lab/LoadingButton'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PasswordInput from 'src/@core/components/inputs/passwordInput'
import TextInput from 'src/@core/components/inputs/textInput'
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Layout Import
import { useFormik } from 'formik'
import AuthWrapperLayout from 'src/@core/components/authWrapper'
import { registrationValidationSchema } from 'src/utils/validation/auth/registrationValidationSchema'

const Register = () => {
  const { register, isSubmitting } = useAuth()

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: registrationValidationSchema,
    onSubmit: async values => {
      await register(values)
    }
  })

  const isFormNotTouched = Object.keys(validation.touched).length === 0
  const doesTouchExists = validation.touched.constructor === Object
  const isSubtmitButtonDisableByTouched = isFormNotTouched && doesTouchExists

  const isFormValid = validation.isValid

  const isSubmitButtonDisabled = isSubmitting || !isFormValid || isSubtmitButtonDisableByTouched

  return (
    <AuthWrapperLayout>
      <>
        <Box sx={{ mb: 6 }}>
          <Typography variant='h5' sx={{ mb: 1.5, letterSpacing: '0.18px', fontWeight: 600 }}>
            Cadastro
          </Typography>
          <Typography variant='body2'>Informe seus dados e finalize seu cadastro!</Typography>
        </Box>
        <form
          noValidate
          autoComplete='off'
          onSubmit={e => {
            e.preventDefault()
            validation.handleSubmit(e)
          }}
        >
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <TextInput
                inputLabel='Nome'
                inputIdentifier='firstName'
                value={validation.values.firstName}
                errorMessage={validation.errors.firstName}
                isInvalid={!!(validation.errors.firstName && validation.touched.firstName)}
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                inputLabel='Sobrenome'
                inputIdentifier='lastName'
                value={validation.values.lastName}
                errorMessage={validation.errors.lastName}
                isInvalid={!!(validation.errors.lastName && validation.touched.lastName)}
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                inputLabel='Email'
                inputIdentifier='email'
                value={validation.values.email}
                errorMessage={validation.errors.email}
                isInvalid={!!(validation.errors.email && validation.touched.email)}
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordInput
                inputLabel='Senha'
                inputIdentifier='password'
                value={validation.values.password}
                errorMessage={validation.errors.password}
                isInvalid={!!(validation.errors.password && validation.touched.password)}
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordInput
                inputLabel='Repita a Senha'
                inputIdentifier='confirmPassword'
                value={validation.values.confirmPassword}
                errorMessage={validation.errors.confirmPassword}
                isInvalid={!!(validation.errors.confirmPassword && validation.touched.confirmPassword)}
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
              />
            </Grid>

            <Grid item xs={12}>
              <LoadingButton
                loading={isSubmitting}
                disabled={isSubmitButtonDisabled}
                fullWidth
                size='large'
                type='submit'
                variant='contained'
                sx={{ mb: 7 }}
              >
                Cadastrar
              </LoadingButton>
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Typography sx={{ mr: 2, color: 'text.secondary' }}>Ja possui conta?</Typography>
            <Typography component={Link} href='/entrar' sx={{ color: 'primary.main', textDecoration: 'none' }}>
              Entrar
            </Typography>
          </Box>
        </form>
      </>
    </AuthWrapperLayout>
  )
}

Register.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

Register.guestGuard = true

export default Register
