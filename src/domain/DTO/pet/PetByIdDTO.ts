import { Gender } from 'src/domain/enum/pet/Gender'
import { AddressDTO } from '../address/AddressDTO'
import { CharacteristicDTO } from './PetCharacteristicDTO'
import { PetPictureDTO } from './PetPictureDTO'

export type PetById = {
  id: number
  name: string
  yearsAge: number
  monthsAge: number
  gender: Gender
  size: string
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
}
