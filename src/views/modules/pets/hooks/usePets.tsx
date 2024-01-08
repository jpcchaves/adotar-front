import { ApiResponsePaginated } from 'src/domain/models/ApiResponsePaginated'
import { PetModelMin } from 'src/domain/models/pet/PetModel'
import { HttpMethod, httpRequest } from 'src/utils/http'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux'

import toast from 'react-hot-toast'
import { PetCreateDTO } from 'src/domain/DTO/pet/PetCreateDTO'
import { ApiMessageResponse } from 'src/domain/models/ApiMessageResponse'
import useNavigation from 'src/hooks/navigation/useNavigation'
import { loadPets, loadPetsPaginated } from 'src/store/pets'
import { updatePetFavorite } from 'src/utils/pet/updatePetFavorite'
import petsRoutes from '../../../../configs/routes/pets'
import useLoading from '../../../../hooks/loading/useLoading'

const FAVORITE = true
const NOT_FAVORITE = false

const ONE_SECONDS_IN_MILLIS = 1000

export type toggleSavedPetAction = 'ADD' | 'REMOVE'

const usePets = () => {
  const { navigateWithTime } = useNavigation()
  const dispatch = useAppDispatch()
  const { isLoading, setLoading } = useLoading()
  const { pets } = useAppSelector(state => state.pets)

  const getListPets = async (page = 0) => {
    setLoading(true)
    await httpRequest<void, ApiResponsePaginated<PetModelMin>>(
      HttpMethod.GET,
      `${petsRoutes.petsEndpoint}?page=${page}&size=6&sort=createdAt,desc`
    )
      .then(res => {
        handlePetListPagination(res)
      })
      .catch(() => {
        // console.log(err);
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const createPet = async (data: PetCreateDTO) => {
    await httpRequest<PetCreateDTO, ApiMessageResponse>(HttpMethod.POST, '/v1/pets', data)
      .then(res => {
        toast.success(res.message)
        navigateWithTime('pets', ONE_SECONDS_IN_MILLIS)
      })
      .catch(err => {
        toast.error(err)
        console.log(err)
      })
  }

  const addSavedPet = async (petId: string) => {
    await httpRequest<void, ApiMessageResponse>(HttpMethod.POST, `${petsRoutes.savedPetsEndpoint}/${petId}`)
      .then(({ message }) => {
        toast.success(message)
        handleUpdatePetFavorite(petId, FAVORITE)
      })
      .catch(err => {
        toast.error(err)

        // console.log(err);
      })
  }

  const removeSavedPet = async (petId: string) => {
    await httpRequest<void, ApiMessageResponse>(HttpMethod.DELETE, `${petsRoutes.savedPetsEndpoint}/${petId}`)
      .then(({ message }) => {
        toast.success(message)
        handleUpdatePetFavorite(petId, NOT_FAVORITE)
      })
      .catch(err => {
        toast.error(err)

        // console.log(err);
      })
  }

  const toggleSavedPet = (petId: string, action: toggleSavedPetAction) => {
    switch (action) {
      case 'ADD':
        addSavedPet(petId)
        break
      case 'REMOVE':
        removeSavedPet(petId)
        break
    }
  }

  const handlePetListPagination = (petsPaginated: ApiResponsePaginated<PetModelMin>) => {
    if (pets && petsPaginated.pageNo > 0) {
      const newData = pets.concat(petsPaginated.content)
      dispatch(
        loadPetsPaginated({
          content: newData,
          last: petsPaginated.last,
          totalElements: petsPaginated.totalElements,
          pageSize: petsPaginated.pageSize,
          pageNo: petsPaginated.pageNo,
          totalPages: petsPaginated.totalPages
        })
      )
    } else {
      dispatch(loadPetsPaginated(petsPaginated))
    }
  }

  const handleUpdatePetFavorite = (petId: string, newFavoriteValue: boolean) => {
    updatePetFavorite(pets!, petId, newFavoriteValue)
    dispatch(loadPets(updatePetFavorite(pets!, petId, newFavoriteValue)))
  }

  return { getListPets, createPet, addSavedPet, removeSavedPet, handlePetListPagination, toggleSavedPet, isLoading }
}

export default usePets
