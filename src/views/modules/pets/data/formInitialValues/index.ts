import { PetDetailsDTO } from 'src/domain/DTO/pet/PetDetailsDTO'
import { Gender } from 'src/domain/enum/pet/Gender'
import { monthsAgeOptions, yearsAgeOptions } from '../age/ageOptions'
import { petHealthConditionMenuItems } from '../petHealthConditionMenuItems'
import { petSizeMenuItems } from '../petSizeMenuItems'
import { petTypeMenuItems } from '../petTypeMenuItems'

export const stepOneInitialValues = (petDetails: PetDetailsDTO) => {
  return {
    typeId: {
      value: petDetails ? String(petDetails.type.id) : '',
      label: petTypeMenuItems.find(p => p.value == petDetails?.type.id)?.label || ''
    },
    name: petDetails ? petDetails?.name : '',
    gender: {
      value: petDetails ? petDetails.gender : '',
      label: petDetails?.gender === Gender.M ? 'Macho' : 'Fêmea'
    },
    size: {
      value: petDetails ? petDetails?.size : '',
      label: petSizeMenuItems.find(p => p.value == petDetails?.size)?.label || ''
    },
    healthCondition: {
      value: petDetails ? petDetails.healthCondition : '',
      label: petHealthConditionMenuItems.find(h => h.value == petDetails?.healthCondition)?.label || ''
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
      value: petDetails ? petDetails.yearsAge : '',
      label: yearsAgeOptions.find(ya => ya.value == petDetails?.yearsAge)?.label || ''
    },
    monthsAge: {
      value: petDetails ? petDetails.monthsAge : '',
      label: monthsAgeOptions.find(ma => ma.value == petDetails?.monthsAge)?.label || ''
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
