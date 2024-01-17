import { petDetailsEndpointV1 } from 'src/configs/routes'
import { PetDetailsDTO } from 'src/domain/DTO/pet/PetDetailsDTO'
import { HttpMethod, httpRequest } from 'src/utils/http'
import { PetService } from '../PetService'

class PetServiceImpl implements PetService {
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
