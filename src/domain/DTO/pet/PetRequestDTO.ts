import { PetPictureDTO } from './PetPictureDTO'

export interface PetRequestDTO {
  breedId: string
  characteristicsIds: string[]
  color: string
  description: string
  gender: string
  healthCondition: string
  monthsAge: string
  name: string
  address: {
    neighborhood: string
    number: string
    complement: string
    cityIbge: string
    street: string
    state: string
    zipcode: string
  }
  petPictures: PetPictureDTO[]
  size: string
  typeId: string
  yearsAge: string
}
