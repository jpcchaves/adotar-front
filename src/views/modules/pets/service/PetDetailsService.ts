import { PetDetailsDTO } from 'src/domain/DTO/pet/PetDetailsDTO'

export interface PetDetailsService {
  getPetDetailedInfo(petId: string): Promise<PetDetailsDTO>
}
