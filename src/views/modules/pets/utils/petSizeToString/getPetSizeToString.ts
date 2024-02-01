import { PetSize } from '../../models/petSize/PetSize'

const petSizeToStringMap: Record<PetSize, string> = {
  [PetSize.TINY]: 'Mini',
  [PetSize.SMALL]: 'Pequeno',
  [PetSize.MEDIUM]: 'Medio',
  [PetSize.LARGE]: 'Grande'
}

export const getPetSizeToString = (size: PetSize | undefined): string => {
  return size ? petSizeToStringMap[size] : ''
}
