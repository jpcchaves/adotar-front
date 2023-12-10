import { ApiResponsePaginated } from 'src/domain/models/ApiResponsePaginated'
import { PetModelMin } from 'src/domain/models/pet/PetModel'
import { HttpMethod, httpRequest } from 'src/utils/http'
import { useAppDispatch } from '../useRedux'

import { loadPetsPaginated } from 'src/store/pets'
import petsRoutes from '../../configs/routes/pets'
import useLoading from '../loading/useLoading'

const usePets = () => {
  const dispatch = useAppDispatch()
  const { isLoading, setLoading } = useLoading()

  const getListPets = async () => {
    setLoading(true)
    await httpRequest<void, ApiResponsePaginated<PetModelMin>>(HttpMethod.GET, `${petsRoutes.petsEndpoint}?size=6`)
      .then(res => {
        dispatch(loadPetsPaginated(res))
      })
      .catch(() => {
        // console.log(err);
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return { getListPets, isLoading }
}

export default usePets
