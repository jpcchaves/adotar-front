import { FormikValues } from 'formik'
import { PetRequestDTO } from 'src/domain/DTO/pet/PetRequestDTO'

export const prepareValuesToSubmit = (validationValues: FormikValues): PetRequestDTO => {
  return {
    name: validationValues.name,
    yearsAge: validationValues.yearsAge.value,
    monthsAge: validationValues.monthsAge.value,
    gender: validationValues.gender.value,
    size: validationValues.size.value,
    healthCondition: validationValues.healthCondition.value,
    color: validationValues.color,
    description: validationValues.description,
    characteristicsIds: validationValues.characteristicsIds,
    typeId: validationValues.typeId.value,
    breedId: validationValues.breedId.value,
    address: {
      number: validationValues.number,
      neighborhood: validationValues.neighborhood,
      cityIbge: validationValues.city.value,
      state: validationValues.state.value,
      street: validationValues.street,
      complement: validationValues.complement,
      zipcode: validationValues.zipcode
    },
    petPictures: validationValues.petPictures
  }
}
