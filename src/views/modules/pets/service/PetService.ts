import { PetCreateDTO } from 'src/domain/DTO/pet/PetCreateDTO'
import { PetDetailsDTO } from 'src/domain/DTO/pet/PetDetailsDTO'
import { ApiMessageResponse } from 'src/domain/models/ApiMessageResponse'
import { ApiResponsePaginated } from 'src/domain/models/ApiResponsePaginated'
import { PetModelMin } from 'src/domain/models/pet/PetModel'

export interface PetService {
  getListPets: (page?: number) => Promise<ApiResponsePaginated<PetModelMin>>
  getById: (id: string) => Promise<PetDetailsDTO>
  createPet: (data: PetCreateDTO) => Promise<ApiMessageResponse>
}
