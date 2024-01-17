import { petDetailsEndpointV1, petsEndpointV2 } from 'src/configs/routes'
import { PetDetailsDTO } from 'src/domain/DTO/pet/PetDetailsDTO'
import { ApiResponsePaginated } from 'src/domain/models/ApiResponsePaginated'
import { PetModelMin } from 'src/domain/models/pet/PetModel'
import { HttpMethod, httpRequest } from 'src/utils/http'
import { PetService } from '../PetService'

class PetServiceImpl implements PetService {
  getListPets = (
    setLoading: (value: boolean) => void,
    page?: number | undefined
  ): Promise<ApiResponsePaginated<PetModelMin>> => {
    setLoading(true)

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
        .finally(() => {
          setLoading(false)
        })
    })
  }

  getById = async (id: string, setLoading: (value: boolean) => void): Promise<PetDetailsDTO> => {
    setLoading(true)

    return new Promise((resolve, reject) => {
      httpRequest<void, PetDetailsDTO>(HttpMethod.GET, `${petDetailsEndpointV1}/${id}`)
        .then(res => {
          resolve(res)
        })
        .catch((err: string) => {
          reject(err)
        })
        .finally(() => {
          setLoading(false)
        })
    })
  }
}

export const petService = new PetServiceImpl()
