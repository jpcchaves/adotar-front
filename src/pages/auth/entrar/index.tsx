import { ReactNode } from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import LoginView from 'src/views/modules/auth/pages/login'

const LoginPage = () => {
  return <LoginView />
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>
LoginPage.guestGuard = true

export default LoginPage
