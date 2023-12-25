export const stepOneInitialValues = () => {
  return {
    typeId: '',
    name: '',
    gender: '',
    size: '',
    healthCondition: ''
  }
}

export const stepTwoInitialValues = () => {
  return { breedId: '', color: '', yearsAge: '', monthsAge: '', description: '', characteristicsIds: [] }
}

export const stepThreeInitialValues = () => {
  return { zipcode: '', street: '', number: '', complement: '', neighborhood: '', city: '' }
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
