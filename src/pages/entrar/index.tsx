// ** React Imports
import { useFormik } from 'formik'
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import LoadingButton from '@mui/lab/LoadingButton'
import Box from '@mui/material/Box'
import MuiCard, { CardProps } from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'

// ** Icon Imports

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import { Alert } from '@mui/material'
import InputDivider from 'src/@core/components/inputs/inputDividers'
import PasswordInput from 'src/@core/components/inputs/passwordInput'
import TextInput from 'src/@core/components/inputs/textInput'
import { useAuth } from 'src/hooks/useAuth'
import { useAppSelector } from 'src/hooks/useRedux'
import { loginValidationSchema } from 'src/utils/validation/auth/loginValidationSchema'
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustrationsV1'

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: 450 }
}))

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const LoginPage = () => {
  const theme = useTheme()
  const auth = useAuth()
  const { hasError, errorMessage } = useAppSelector(state => state.auth)

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    validationSchema: loginValidationSchema,
    onSubmit: async values => {
      await auth.login(values)
    }
  })

  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ p: theme => `${theme.spacing(13, 7, 6.5)} !important` }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width={47} fill='none' height={26} viewBox='0 0 268 150' xmlns='http://www.w3.org/2000/svg'>
              <rect
                rx='25.1443'
                width='50.2886'
                height='143.953'
                fill={theme.palette.primary.main}
                transform='matrix(-0.865206 0.501417 0.498585 0.866841 195.571 0)'
              />
              <rect
                rx='25.1443'
                width='50.2886'
                height='143.953'
                fillOpacity='0.4'
                fill='url(#paint0_linear_7821_79167)'
                transform='matrix(-0.865206 0.501417 0.498585 0.866841 196.084 0)'
              />
              <rect
                rx='25.1443'
                width='50.2886'
                height='143.953'
                fill={theme.palette.primary.main}
                transform='matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)'
              />
              <rect
                rx='25.1443'
                width='50.2886'
                height='143.953'
                fill={theme.palette.primary.main}
                transform='matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)'
              />
              <rect
                rx='25.1443'
                width='50.2886'
                height='143.953'
                fillOpacity='0.4'
                fill='url(#paint1_linear_7821_79167)'
                transform='matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)'
              />
              <rect
                rx='25.1443'
                width='50.2886'
                height='143.953'
                fill={theme.palette.primary.main}
                transform='matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)'
              />
              <defs>
                <linearGradient
                  y1='0'
                  x1='25.1443'
                  x2='25.1443'
                  y2='143.953'
                  id='paint0_linear_7821_79167'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop />
                  <stop offset='1' stopOpacity='0' />
                </linearGradient>
                <linearGradient
                  y1='0'
                  x1='25.1443'
                  x2='25.1443'
                  y2='143.953'
                  id='paint1_linear_7821_79167'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop />
                  <stop offset='1' stopOpacity='0' />
                </linearGradient>
              </defs>
            </svg>
            <Typography variant='h6' sx={{ ml: 2, lineHeight: 1, fontWeight: 700, fontSize: '1.5rem !important' }}>
              {themeConfig.templateName}
            </Typography>
          </Box>
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

            <Box
              sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
            >
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
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
LoginPage.guestGuard = true

export default LoginPage
