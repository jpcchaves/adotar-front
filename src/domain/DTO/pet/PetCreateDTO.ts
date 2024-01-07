export interface PetCreateDTO {
  breedId: string
  characteristicsIds: string[]
  cityIbge: string
  color: string
  complement: string
  description: string
  gender: string
  healthCondition: string
  monthsAge: string
  name: string
  neighborhood: string
  number: string
  petPictures: { imgUrl: string }[]
  size: string
  state: string
  street: string
  typeId: string
  yearsAge: string
  zipcode: string
}
