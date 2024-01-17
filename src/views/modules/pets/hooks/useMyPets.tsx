import { useDispatch } from 'react-redux'
import {} from 'src/configs/routes/pets'
import { ApiResponsePaginated } from 'src/domain/models/ApiResponsePaginated'
import { PetModelMin } from 'src/domain/models/pet/PetModel'
import useLoading from 'src/hooks/loading/useLoading'
import { loadMyPets } from 'src/store/pets'
import { HttpMethod, httpRequest } from 'src/utils/http'

const useMyPets = () => {
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
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return { getMyPets, isLoading }
}

export default useMyPets
