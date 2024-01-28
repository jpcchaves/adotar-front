import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux'

import toast from 'react-hot-toast'
import { PetRequestDTO } from 'src/domain/DTO/pet/PetRequestDTO'
import useNavigation from 'src/hooks/navigation/useNavigation'
import { loadPetDetails, loadPets } from 'src/store/pets'
import { updatePetFavorite } from 'src/utils/pet/updatePetFavorite'
import useLoading from '../../../../hooks/loading/useLoading'
import { FAVORITE, NOT_FAVORITE, ONE_SECOND_IN_MILLIS } from '../contants'
import { toggleSavedPetAction } from '../models/savedPetActions'
import { petService } from '../service/impl/PetServiceImpl'
import useHandlePetsPagination from './useHandlePetsPagination'

const usePets = () => {
  const { pets } = useAppSelector(state => state.pets)
  const { handlePetListPagination } = useHandlePetsPagination({ pets })
  const { navigateWithTime, navigate } = useNavigation()
  const dispatch = useAppDispatch()
  const { isLoading, setLoading } = useLoading()

  const getListPets = async (page = 0) => {
    setLoading(true)

    await petService
      .getListPets(page)
      .then(res => {
        handlePetListPagination(res)
      })
      .catch(err => toast.error(err))
      .finally(() => setLoading(false))
  }

  const createPet = async (data: PetRequestDTO) => {
    setLoading(true)

    await petService
      .createPet(data)
      .then(res => {
        toast.success(res.message)
        navigateWithTime('/pets', ONE_SECOND_IN_MILLIS)
      })
      .catch(err => {
        toast.error(err)
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const updatePet = async (id: string, data: PetRequestDTO) => {
    setLoading(true)

    await petService
      .updatePet(id, data)
      .then(res => {
        toast.success(res.message)
        navigateWithTime('/pets', ONE_SECOND_IN_MILLIS)
      })
      .catch(err => {
        toast.error(err)
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const getPetDetails = async (id: string) => {
    setLoading(true)

    await petService
      .getPetDetails(id)
      .then(res => {
        dispatch(loadPetDetails(res))
        navigate(`/pets/editar/${id}`)
      })
      .catch(err => toast.error(err))
      .finally(() => setLoading(false))
  }

  const addSavedPet = async (petId: string) => {
    await petService
      .addSavedPet(petId)
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
    await petService
      .removeSavedPet(petId)
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
      default:
        return
    }
  }

  const handleUpdatePetFavorite = (petId: string, newFavoriteValue: boolean) => {
    updatePetFavorite(pets!, petId, newFavoriteValue)
    dispatch(loadPets(updatePetFavorite(pets!, petId, newFavoriteValue)))
  }

  return {
    getListPets,
    createPet,
    updatePet,
    getPetDetails,
    addSavedPet,
    removeSavedPet,
    toggleSavedPet,
    isLoading
  }
}

export default usePets
