import { FormikValues } from 'formik'

const firstStepDataItems = (validation: FormikValues) => [
  {
    title: 'Dados',
    items: [
      { label: 'Nome', defaultValue: validation.values.name },
      { label: 'Tipo', defaultValue: validation.values.typeId?.label },
      { label: 'Sexo', defaultValue: validation.values.gender?.label },
      { label: 'Tamanho', defaultValue: validation.values.size?.label },
      { label: 'Estado de Saúde', defaultValue: validation.values.healthCondition?.label }
    ]
  }
]

const secondStepDataItems = (validation: FormikValues) => [
  {
    title: 'Detalhes',
    items: [
      { label: 'Raça', defaultValue: validation.values.breedId?.label || '' },
      { label: 'Cor', defaultValue: validation.values.color || '' },
      { label: 'Anos', defaultValue: validation.values.yearsAge?.label || '' },
      { label: 'Meses', defaultValue: validation.values.monthsAge?.label || '' },
      { label: 'Descrição', defaultValue: validation.values.description || '' },
      { label: 'Características', defaultValue: (validation.values.characteristicsIds || []).join(', ') }
    ]
  }
]

const thirdStepDataItems = (validation: FormikValues) => [
  {
    title: 'Endereço',
    items: [
      { label: 'CEP', defaultValue: validation.values.zipcode || '' },
      { label: 'Estado', defaultValue: validation.values.state?.label || '' },
      { label: 'Cidade', defaultValue: validation.values.city?.label || '' },
      { label: 'Rua', defaultValue: validation.values.street || '' },
      { label: 'Número', defaultValue: validation.values.number || '' },
      { label: 'Complemento', defaultValue: validation.values.complement || '' },
      { label: 'Bairro', defaultValue: validation.values.neighborhood || '' }
    ]
  }
]

const getPreviewDataItems = (validation: FormikValues) => [
  ...firstStepDataItems(validation),
  ...secondStepDataItems(validation),
  ...thirdStepDataItems(validation)
]

export { getPreviewDataItems }
