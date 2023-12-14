import { ReactNode } from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import RegisterView from 'src/views/modules/auth/pages/register'

const RegisterPage = () => {
  return <RegisterView />
}

RegisterPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

RegisterPage.guestGuard = true

export default RegisterPage
