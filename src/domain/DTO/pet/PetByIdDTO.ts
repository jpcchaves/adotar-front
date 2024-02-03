import { Gender } from 'src/domain/enum/pet/Gender'
import { AddressDTO } from '../address/AddressDTO'
import { CharacteristicDTO } from './PetCharacteristicDTO'
import { PetPictureDTO } from './PetPictureDTO'
import { PetSize } from 'src/views/modules/pets/models/petSize/PetSize'

export type PetById = {
  id: string
  name: string
  yearsAge: number
  monthsAge: number
  gender: Gender
  size: PetSize
  healthCondition: string
  color: string
  description: string
  visualizations: number
  adoptionDate: null
  active: boolean
  characteristics: CharacteristicDTO[]
  type: string
  breed: string
  petPictures: PetPictureDTO[]
  address: AddressDTO
  available: boolean
  favorite: boolean
  ownerName: string
}
