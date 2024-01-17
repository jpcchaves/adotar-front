import { petDetailsEndpointV1, petsEndpointV2, savedPetsEndpointV1 } from 'src/configs/routes'
import { PetCreateDTO } from 'src/domain/DTO/pet/PetCreateDTO'
import { PetDetailsDTO } from 'src/domain/DTO/pet/PetDetailsDTO'
import { ApiMessageResponse } from 'src/domain/models/ApiMessageResponse'
import { ApiResponsePaginated } from 'src/domain/models/ApiResponsePaginated'
import { PetModelMin } from 'src/domain/models/pet/PetModel'
import { HttpMethod, httpRequest } from 'src/utils/http'
import { PetService } from '../PetService'

class PetServiceImpl implements PetService {
  getListPets = (page?: number | undefined): Promise<ApiResponsePaginated<PetModelMin>> => {
    return new Promise((resolve, reject) => {
      httpRequest<void, ApiResponsePaginated<PetModelMin>>(
        HttpMethod.GET,
        `${petsEndpointV2}?page=${page}&size=6&sort=createdAt,desc`
      )
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  getById = async (id: string): Promise<PetDetailsDTO> => {
    return new Promise((resolve, reject) => {
      httpRequest<void, PetDetailsDTO>(HttpMethod.GET, `${petDetailsEndpointV1}/${id}`)
        .then(res => {
          resolve(res)
        })
        .catch((err: string) => {
          reject(err)
        })
    })
  }

  createPet = async (data: PetCreateDTO): Promise<ApiMessageResponse> => {
    return new Promise((resolve, reject) => {
      httpRequest<PetCreateDTO, ApiMessageResponse>(HttpMethod.POST, '/v1/pets', data)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  addSavedPet = async (petId: string): Promise<ApiMessageResponse> => {
    return new Promise((resolve, reject) => {
      httpRequest<void, ApiMessageResponse>(HttpMethod.POST, `${savedPetsEndpointV1}/${petId}`)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)

          // console.log(err);
        })
    })
  }

  removeSavedPet = async (petId: string): Promise<ApiMessageResponse> => {
    return new Promise((resolve, reject) => {
      httpRequest<void, ApiMessageResponse>(HttpMethod.DELETE, `${savedPetsEndpointV1}/${petId}`)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)

          // console.log(err);
        })
    })
  }
}

export const petService = new PetServiceImpl()
