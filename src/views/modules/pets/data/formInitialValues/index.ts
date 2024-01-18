import { PetDetailsDTO } from 'src/domain/DTO/pet/PetDetailsDTO'

export const stepOneInitialValues = (petDetails: PetDetailsDTO) => {
  return {
    typeId: { value: petDetails ? String(petDetails.type.id) : '' },
    name: petDetails ? petDetails?.name : '',
    gender: {
      value: petDetails ? petDetails.gender : ''
    },
    size: {
      value: petDetails ? petDetails?.size : ''
    },
    healthCondition: {
      value: petDetails ? petDetails.healthCondition : ''
    }
  }
}

export const stepTwoInitialValues = (petDetails: PetDetailsDTO) => {
  return {
    breedId: {
      value: petDetails ? petDetails.breed.id : '',
      label: petDetails ? petDetails.breed.name : ''
    },
    color: petDetails ? petDetails.color : '',
    yearsAge: {
      value: petDetails ? petDetails.yearsAge : ''
    },
    monthsAge: {
      value: petDetails ? petDetails.monthsAge : ''
    },
    description: petDetails ? petDetails.description : '',
    characteristicsIds: petDetails ? petDetails.characteristics.map(c => String(c)) : []
  }
}

export const stepThreeInitialValues = (petDetails: PetDetailsDTO) => {
  return {
    zipcode: petDetails ? petDetails.address.zipcode : '',

    state: {
      value: petDetails ? petDetails.address.state : ''
    },
    city: {
      value: petDetails ? petDetails.address.city : ''
    },
    street: petDetails ? petDetails.address.street : '',
    number: petDetails ? petDetails.address.number : '',
    complement: petDetails ? petDetails.address.complement : '',
    neighborhood: petDetails ? petDetails.address.neighborhood : ''
  }
}

export const stepFourInitialValues = (petDetails: PetDetailsDTO) => {
  return {
    petPictures: petDetails ? petDetails.petPictures : []
  }
}

export const getFormInitialValues = (petDetails: PetDetailsDTO) => {
  return {
    ...stepOneInitialValues(petDetails),
    ...stepTwoInitialValues(petDetails),
    ...stepThreeInitialValues(petDetails),
    ...stepFourInitialValues(petDetails)
  }
}

export const getFormInitialValuesArr = (petDetails: PetDetailsDTO) => {
  return [
    stepOneInitialValues(petDetails),
    stepTwoInitialValues(petDetails),
    stepThreeInitialValues(petDetails),
    stepFourInitialValues(petDetails)
  ]
}
