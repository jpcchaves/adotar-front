import { Gender } from 'src/domain/enum/pet/Gender'
import { PetAddress } from './PetAddress'
import { PetCharacteristic } from './PetCharacteristic'
import { PetPicture } from './PetPicture'

export type PetModelMin = {
  id: string
  name: string
  gender: Gender
  description: string
  visualizations: number
  favorite: boolean
  type: string
  breed: string
  petPictures: PetPicture[]
  address: PetAddress
}

export type PetModel = {
  id: string
  name: string
  yearsAge: number
  monthsAge: number
  gender: Gender
  size: string
  healthCondition: string
  color: string
  description: string
  visualizations: number
  adoptionDate?: string | null
  active: boolean
  characteristics: PetCharacteristic[]
  type: string
  breed: string
  petPictures: PetPicture[]
  available: boolean
  favorite: boolean
}
