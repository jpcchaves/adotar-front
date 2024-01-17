import { PetDetailsDTO } from 'src/domain/DTO/pet/PetDetailsDTO'

export interface PetService {
  getById: (id: string, setLoading: (value: boolean) => void) => Promise<PetDetailsDTO>
}
