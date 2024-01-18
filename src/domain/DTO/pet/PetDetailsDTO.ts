import { PetBreedDTO } from './PetBreedDTO'
import { PetTypeDTO } from './PetTypeDTO'

export type PetDetailsDTO = {
  id: number
  name: string
  yearsAge: string
  monthsAge: string
  gender: string
  size: string
  healthCondition: string
  color: string
  description: string
  visualizations: number
  adoptionDate: null
  active: boolean
  characteristics: string[]
  type: PetTypeDTO
  breed: PetBreedDTO
  petPictures: string[]
  available: boolean
  favorite: boolean
  address: PetAddressDTO
}

type PetAddressDTO = {
  zipcode: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
}
