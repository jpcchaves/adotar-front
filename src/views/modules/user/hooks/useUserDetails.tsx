import { FormikValues } from 'formik'
import { useCallback } from 'react'
import toast from 'react-hot-toast'
import { AddressRequestDTO } from 'src/domain/DTO/address/AddressRequestDTO'
import { UpdatePasswordDTO } from 'src/domain/DTO/auth/UpdatePasswordDTO'
import useLoading from 'src/hooks/loading/useLoading'
import { userServiceImpl } from '../service/UserServiceImpl'

interface IProps {
  secondTabValidation: FormikValues
  thirdTabValidation: FormikValues
}

const useUserDetails = ({ secondTabValidation }: IProps) => {
  const { setLoading, isLoading } = useLoading()

  const updateUserPassword = useCallback(async (requestDTO: UpdatePasswordDTO) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const createUserAddress = useCallback(async (requestDTO: AddressRequestDTO) => {
    setLoading(true)

    await userServiceImpl
      .createUserAddress(requestDTO)
      .then(res => {
        toast.success(res.message)
      })
      .catch(err => {
        toast.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateUserAddress = useCallback(async (requestDTO: AddressRequestDTO) => {
    setLoading(true)

    await userServiceImpl
      .updateUserAddress(requestDTO)
      .then(res => {
        toast.success(res.message)
      })
      .catch(err => {
        toast.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getUserAddress = useCallback(async () => {
    setLoading(true)

    await userServiceImpl
      .getUserAddress()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { updateUserPassword, createUserAddress, updateUserAddress, getUserAddress, isLoading }
}

export default useUserDetails
