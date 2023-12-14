// ** React Imports
import { useFormik } from 'formik'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import LoadingButton from '@mui/lab/LoadingButton'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// ** Icon Imports

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import

// ** Demo Imports
import { Alert } from '@mui/material'
import InputDivider from 'src/@core/components/inputs/inputDividers'
import PasswordInput from 'src/@core/components/inputs/passwordInput'
import TextInput from 'src/@core/components/inputs/textInput'
import { useAuth } from 'src/hooks/useAuth'
import { useAppSelector } from 'src/hooks/useRedux'
import { loginValidationSchema } from 'src/utils/validation/auth/loginValidationSchema'
import AuthWrapperLayout from 'src/views/modules/auth/components/authWrapper'

const mockedUser = {
  user: {
    email: process.env.NEXT_PUBLIC_MOCKED_USER_EMAIL,
    password: process.env.NEXT_PUBLIC_MOCKED_USER_PASSWORD
  },
  admin: {
    email: process.env.NEXT_PUBLIC_MOCKED_USER_ADMIN_EMAIL,
    password: process.env.NEXT_PUBLIC_MOCKED_USER_ADMIN_PASSWORD
  }
}

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const LoginView = () => {
  const auth = useAuth()
  const { hasError, errorMessage } = useAppSelector(state => state.auth)

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: mockedUser.admin.email!,
      password: mockedUser.admin.password!,
      rememberMe: true
    },
    validationSchema: loginValidationSchema,
    onSubmit: async values => {
      await auth.login(values)
    }
  })

  return (
    <AuthWrapperLayout>
      <>
        <Box sx={{ mb: 6 }}>
          <Typography variant='h5' sx={{ mb: 1.5, fontWeight: 600, letterSpacing: '0.18px' }}>
            {`Bem vindo ao ${themeConfig.templateName}! 👋🏻`}
          </Typography>
          <Typography variant='body2'>Informe seus dados para realizar o login</Typography>
        </Box>
        {hasError && (
          <Box sx={{ mb: 6 }}>
            <Alert severity='error'>{errorMessage}</Alert>
          </Box>
        )}
        <form
          noValidate
          autoComplete='off'
          onSubmit={e => {
            e.preventDefault()
            validation.handleSubmit()
          }}
        >
          <TextInput
            inputIdentifier='email'
            onChange={validation.handleChange}
            value={validation.values.email}
            onBlur={validation.handleBlur}
            errorMessage={validation.errors.email}
            isInvalid={!!(validation.errors.email && validation.touched.email)}
            inputLabel='Email'
          />

          <InputDivider />

          <PasswordInput
            inputIdentifier='password'
            errorMessage={validation.errors.password}
            isInvalid={!!(validation.errors.password && validation.touched.password)}
            inputLabel='Senha'
            onChange={validation.handleChange}
            onBlur={validation.handleBlur}
            value={validation.values.password}
          />

          <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <FormControlLabel
              label='Lembrar de mim'
              control={
                <Checkbox
                  value={validation.values.rememberMe}
                  checked={validation.values.rememberMe}
                  onChange={validation.handleChange}
                  id='rememberMe'
                />
              }
              sx={{ '& .MuiFormControlLabel-label': { color: 'text.primary' } }}
            />
            <Typography
              variant='body2'
              component={Link}
              href='/pages/auth/forgot-password-v1'
              sx={{ color: 'primary.main', textDecoration: 'none' }}
            >
              Esqueceu a senha?
            </Typography>
          </Box>
          <LoadingButton
            disabled={auth.isSubmitting}
            fullWidth
            size='large'
            type='submit'
            variant='contained'
            sx={{ mb: 7 }}
            loading={auth.isSubmitting}
          >
            Entrar
          </LoadingButton>
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Typography sx={{ mr: 2, color: 'text.secondary' }}>Novo por aqui?</Typography>
            <Typography component={Link} href='/cadastro' sx={{ color: 'primary.main', textDecoration: 'none' }}>
              Crie sua conta
            </Typography>
          </Box>
        </form>
      </>
    </AuthWrapperLayout>
  )
}

export default LoginView
