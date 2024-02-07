import { FormikValues } from 'formik'
import toast from 'react-hot-toast'
import { UpdatePasswordDTO } from 'src/domain/DTO/auth/UpdatePasswordDTO'
import useLoading from 'src/hooks/loading/useLoading'
import { userServiceImpl } from '../service/UserServiceImpl'

interface IProps {
  secondTabValidation: FormikValues
}

const useUserDetails = ({ secondTabValidation }: IProps) => {
  const { setLoading, isLoading } = useLoading()

  const updateUserPassword = async (requestDTO: UpdatePasswordDTO) => {
    setLoading(true)

    await userServiceImpl
      .updateUserPassword(requestDTO)
      .then(res => {
        toast.success(res.message)
        secondTabValidation.resetForm()
      })
      .catch(err => {
        toast.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return { updateUserPassword, isLoading }
}

export default useUserDetails
