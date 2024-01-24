import toast from 'react-hot-toast'
import { ApiResponsePaginated } from 'src/domain/models/ApiResponsePaginated'
import { PetModelMin } from 'src/domain/models/pet/PetModel'
import useLoading from 'src/hooks/loading/useLoading'
import { useAppSelector } from 'src/hooks/useRedux'
import { HttpMethod, httpRequest } from 'src/utils/http'
import { petService } from '../service/impl/PetServiceImpl'
import useHandlePetsPagination from './useHandlePetsPagination'

interface IProps {
  toggleDeleteModal: () => void
  setSelectedPetId: (prevState: string) => void
}

const useMyPets = ({ toggleDeleteModal, setSelectedPetId }: IProps) => {
  const { myPets } = useAppSelector(state => state.pets)
  const { handleMyPetsListPagination } = useHandlePetsPagination({ pets: myPets })
  const { setLoading, isLoading } = useLoading()

  const getMyPets = async (page = 0) => {
    setLoading(true)

    await httpRequest<void, ApiResponsePaginated<PetModelMin>>(
      HttpMethod.GET,
      `/v1/pets/by-user?size=6&page=${page}&sort=createdAt,desc`
    )
      .then(res => {
        handleMyPetsListPagination(res)
        setSelectedPetId('')
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const deletePet = async (id: string) => {
    setLoading(true)

    await petService
      .deletePet(id)
      .then(res => {
        toast.success(res.message)
        getMyPets()
        toggleDeleteModal()
      })
      .catch(err => {
        toast.error(err)
      })
      .finally(() => {
        setLoading(false)
        setSelectedPetId('')
      })
  }

  return { getMyPets, deletePet, isLoading }
}

export default useMyPets
