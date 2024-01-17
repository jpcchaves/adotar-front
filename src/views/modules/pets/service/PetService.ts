import { PetDetailsDTO } from 'src/domain/DTO/pet/PetDetailsDTO'
import { ApiResponsePaginated } from 'src/domain/models/ApiResponsePaginated'
import { PetModelMin } from 'src/domain/models/pet/PetModel'

export interface PetService {
  getListPets: (setLoading: (value: boolean) => void, page?: number) => Promise<ApiResponsePaginated<PetModelMin>>
  getById: (id: string, setLoading: (value: boolean) => void) => Promise<PetDetailsDTO>
}
