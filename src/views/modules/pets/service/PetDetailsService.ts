import { PetById } from 'src/domain/DTO/pet/PetByIdDTO'

export interface PetDetailsService {
  getPetDetailedInfo(petId: string): Promise<PetById>
}
