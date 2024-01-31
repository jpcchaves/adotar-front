import { PetById } from 'src/domain/DTO/pet/PetByIdDTO'
import { HttpMethod, httpRequest } from 'src/utils/http'
import { PetDetailsService } from '../PetDetailsService'

class PetDetailsServiceImpl implements PetDetailsService {
  getPetDetailedInfo = async (petId: string): Promise<PetById> => {
    return new Promise((resolve, reject) => {
      httpRequest<void, PetById>(HttpMethod.GET, `/v1/pets/${petId}`)
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
