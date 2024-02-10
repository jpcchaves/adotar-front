import { FormikValues } from 'formik'
import { useCallback } from 'react'
import toast from 'react-hot-toast'
import { AddressRequestDTO } from 'src/domain/DTO/address/AddressRequestDTO'
import { UpdatePasswordDTO } from 'src/domain/DTO/auth/UpdatePasswordDTO'
import { ContactRequestDTO } from 'src/domain/DTO/contact/ContactRequestDTO'
import useLoading from 'src/hooks/loading/useLoading'
import { useAppDispatch } from 'src/hooks/useRedux'
import { loadUserInfo } from 'src/store/user'
import { userServiceImpl } from '../service/UserServiceImpl'

interface IProps {
  secondTabValidation: FormikValues
  thirdTabValidation: FormikValues
}

const useUserDetails = ({ secondTabValidation }: IProps) => {
  const dispatch = useAppDispatch()
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
      .then(() => {
        toast.success('Endereço atualizado com sucesso!')
      })
      .catch(err => {
        toast.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const createUserContact = useCallback(async (requestDTO: ContactRequestDTO) => {
    setLoading(true)

    await userServiceImpl
      .createUserContact(requestDTO)
      .then(() => {
        toast.success('Contato criado com sucesso!')
      })
      .catch(err => {
        toast.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateUserContact = useCallback(async (requestDTO: ContactRequestDTO) => {
    setLoading(true)

    await userServiceImpl
      .updateUserContact(requestDTO)
      .then(() => {
        toast.success('Contato atualizado com sucesso!')
      })
      .catch(err => {
        toast.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getUserDetails = useCallback(async () => {
    setLoading(true)

    await userServiceImpl
      .getUserDetails()
      .then(res => {
        dispatch(loadUserInfo(res))
      })
      .catch(err => {
        toast.error(err)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    updateUserPassword,
    createUserAddress,
    updateUserAddress,
    createUserContact,
    updateUserContact,
    getUserDetails,
    isLoading
  }
}

export default useUserDetails
