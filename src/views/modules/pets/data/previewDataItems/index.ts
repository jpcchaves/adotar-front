import { FormikValues } from 'formik'
import { formatZipcode } from 'src/utils/common/zipcode/extractRawZipcode'
import { getCharacteristics } from './getCharacteristics'

const firstStepDataItems = (validation: FormikValues) => [
  {
    title: 'Dados',
    items: [
      { label: 'Nome', key: 'name', defaultValue: validation.values.name },
      { label: 'Tipo', key: 'typeId', defaultValue: validation.values.typeId?.label },
      { label: 'Sexo', key: 'gender', defaultValue: validation.values.gender?.label },
      { label: 'Tamanho', key: 'size', defaultValue: validation.values.size?.label },
      { label: 'Estado de Saúde', key: 'healthCondition', defaultValue: validation.values.healthCondition?.label }
    ]
  }
]

const secondStepDataItems = (validation: FormikValues) => [
  {
    title: 'Detalhes',
    items: [
      { label: 'Raça', key: 'breedId', defaultValue: validation.values.breedId?.label || '' },
      { label: 'Cor', key: 'color', defaultValue: validation.values.color || '' },
      { label: 'Anos', key: 'yearsAge', defaultValue: validation.values.yearsAge?.label || '' },
      { label: 'Meses', key: 'monthsAge', defaultValue: validation.values.monthsAge?.label || '' },
      { label: 'Descrição', key: 'description', defaultValue: validation.values.description || '' },
      {
        label: 'Características',
        key: 'characteristicsIds',
        defaultValue: getCharacteristics(validation.values.characteristicsIds || []).join(', ')
      }
    ]
  }
]

const thirdStepDataItems = (validation: FormikValues) => [
  {
    title: 'Endereço',
    items: [
      { label: 'CEP', key: 'zipcode', defaultValue: formatZipcode(validation.values.zipcode) || '' },
      { label: 'Estado', key: 'state', defaultValue: validation.values.state?.label || '' },
      { label: 'Cidade', key: 'city', defaultValue: validation.values.city?.label || '' },
      { label: 'Rua', key: 'street', defaultValue: validation.values.street || '' },
      { label: 'Número', key: 'number', defaultValue: validation.values.number || '' },
      { label: 'Bairro', key: 'neighborhood', defaultValue: validation.values.neighborhood || '' },
      { label: 'Complemento', key: 'complement', defaultValue: validation.values.complement || '' }
    ]
  }
]

const getPreviewDataItems = (validation: FormikValues) => [
  ...firstStepDataItems(validation),
  ...secondStepDataItems(validation),
  ...thirdStepDataItems(validation)
]

export { getPreviewDataItems }
