import { PetDetailsDTO } from 'src/domain/DTO/pet/PetDetailsDTO'
import { PetRequestDTO } from 'src/domain/DTO/pet/PetRequestDTO'
import { ApiMessageResponse } from 'src/domain/models/ApiMessageResponse'
import { ApiResponsePaginated } from 'src/domain/models/ApiResponsePaginated'
import { PetModelMin } from 'src/domain/models/pet/PetModel'

export interface PetService {
  getListPets: (page?: number) => Promise<ApiResponsePaginated<PetModelMin>>
  getPetDetails: (id: string) => Promise<PetDetailsDTO>
  createPet: (data: PetRequestDTO) => Promise<ApiMessageResponse>
  updatePet: (id: string, data: PetRequestDTO) => Promise<ApiMessageResponse>
  deletePet: (id: string) => Promise<ApiMessageResponse>
  addSavedPet: (petId: string) => Promise<ApiMessageResponse>
  removeSavedPet: (petId: string) => Promise<ApiMessageResponse>
}
