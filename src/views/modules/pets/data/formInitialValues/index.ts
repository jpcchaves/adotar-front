export const stepOneInitialValues = () => {
  return {
    typeId: {
      value: '',
      label: ''
    },
    name: '',
    gender: {
      value: '',
      label: ''
    },
    size: {
      value: '',
      label: ''
    },
    healthCondition: {
      value: '',
      label: ''
    }
  }
}

export const stepTwoInitialValues = () => {
  return {
    breedId: {
      value: '',
      label: ''
    },
    color: '',
    yearsAge: {
      value: '',
      label: ''
    },
    monthsAge: {
      value: '',
      label: ''
    },
    description: '',
    characteristicsIds: []
  }
}

export const stepThreeInitialValues = () => {
  return {
    zipcode: '',
    state: {
      value: '',
      label: ''
    },
    city: {
      value: '',
      label: ''
    },
    street: '',
    number: '',
    complement: '',
    neighborhood: ''
  }
}

export const stepFourInitialValues = () => {
  return {
    petPictures: []
  }
}

export const getFormInitialValues = () => {
  return {
    ...stepOneInitialValues(),
    ...stepTwoInitialValues(),
    ...stepThreeInitialValues(),
    ...stepFourInitialValues()
  }
}

export const getFormInitialValuesArr = () => {
  return [stepOneInitialValues(), stepTwoInitialValues(), stepThreeInitialValues(), stepFourInitialValues()]
}
