import { ApiResponsePaginated } from 'src/domain/models/ApiResponsePaginated'
import { PetModelMin } from 'src/domain/models/pet/PetModel'
import { useAppDispatch } from 'src/hooks/useRedux'
import { loadMyPetsPaginated, loadPetsPaginated } from 'src/store/pets'

interface IProps {
  pets: PetModelMin[] | null
}

const useHandlePetsPagination = ({ pets }: IProps) => {
  const dispatch = useAppDispatch()

  const handlePetListPagination = (petsPaginated: ApiResponsePaginated<PetModelMin>) => {
    const FIRST_PAGE_NO = 0

    if (pets && petsPaginated.pageNo > FIRST_PAGE_NO) {
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

  const handleMyPetsListPagination = (petsPaginated: ApiResponsePaginated<PetModelMin>) => {
    const FIRST_PAGE_NO = 0

    if (pets && petsPaginated.pageNo > FIRST_PAGE_NO) {
      const newData = pets.concat(petsPaginated.content)
      dispatch(
        loadMyPetsPaginated({
          content: newData,
          last: petsPaginated.last,
          totalElements: petsPaginated.totalElements,
          pageSize: petsPaginated.pageSize,
          pageNo: petsPaginated.pageNo,
          totalPages: petsPaginated.totalPages
        })
      )
    } else {
      dispatch(loadMyPetsPaginated(petsPaginated))
    }
  }

  return { handlePetListPagination, handleMyPetsListPagination }
}

export default useHandlePetsPagination
