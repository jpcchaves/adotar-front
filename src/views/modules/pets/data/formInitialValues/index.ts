export const stepOneInitialValues = () => {
  return {
    typeId: '1',
    name: 'Bidu',
    gender: 'F',
    size: 'S',
    healthCondition: 'H'
  }
}

export const stepTwoInitialValues = () => {
  return { breedId: '', color: '', yearsAge: '', monthsAge: '', description: '', characteristicsIds: [] }
}

export const stepThreeInitialValues = () => {
  return {
    zipcode: '',
    state: '',
    city: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: ''
  }
}

export const getFormInitialValues = () => {
  return {
    ...stepOneInitialValues(),
    ...stepTwoInitialValues(),
    ...stepThreeInitialValues()
  }
}

export const getFormInitialValuesArr = () => {
  return [stepOneInitialValues(), stepTwoInitialValues(), stepThreeInitialValues()]
}
