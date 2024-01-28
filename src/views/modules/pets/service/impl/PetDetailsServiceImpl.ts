import { PetDetailsDTO } from 'src/domain/DTO/pet/PetDetailsDTO'
import { HttpMethod, httpRequest } from 'src/utils/http'
import { PetDetailsService } from '../PetDetailsService'

class PetDetailsServiceImpl implements PetDetailsService {
  getPetDetailedInfo = async (petId: string): Promise<PetDetailsDTO> => {
    return new Promise((resolve, reject) => {
      httpRequest<void, PetDetailsDTO>(HttpMethod.GET, `/pets/${petId}`)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export const petDetailsService = new PetDetailsServiceImpl()
