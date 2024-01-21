import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import {} from 'src/configs/routes/pets'
import { ApiResponsePaginated } from 'src/domain/models/ApiResponsePaginated'
import { PetModelMin } from 'src/domain/models/pet/PetModel'
import useLoading from 'src/hooks/loading/useLoading'
import { loadMyPets } from 'src/store/pets'
import { HttpMethod, httpRequest } from 'src/utils/http'
import { petService } from '../service/impl/PetServiceImpl'

interface IProps {
  toggleDeleteModal: () => void
  setSelectedPetId: (prevState: string) => void
}

const useMyPets = ({ toggleDeleteModal, setSelectedPetId }: IProps) => {
  const dispatch = useDispatch()
  const { setLoading, isLoading } = useLoading()
  const getMyPets = async () => {
    setLoading(true)

    await httpRequest<void, ApiResponsePaginated<PetModelMin>>(
      HttpMethod.GET,
      '/v1/pets/by-user?size=10&page=0&sort=id,desc'
    )
      .then(res => {
        dispatch(loadMyPets(res.content))
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
