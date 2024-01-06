import { FormikValues } from 'formik'
import { formatZipcode } from 'src/utils/common/zipcode/extractRawZipcode'
import { PetFormKeys } from '../../components/formSteps/Enum/PetFormKeys'
import { getCharacteristics } from './getCharacteristics'

const firstStepDataItems = (validation: FormikValues) => [
  {
    title: 'Dados',
    items: [
      { label: 'Nome', key: PetFormKeys.Name, defaultValue: validation.values[PetFormKeys.Name] },
      { label: 'Tipo', key: PetFormKeys.TypeId, defaultValue: validation.values[PetFormKeys.TypeId]?.label },
      { label: 'Sexo', key: PetFormKeys.Gender, defaultValue: validation.values[PetFormKeys.Gender]?.label },
      { label: 'Tamanho', key: PetFormKeys.Size, defaultValue: validation.values[PetFormKeys.Size]?.label },
      {
        label: 'Estado de Saúde',
        key: PetFormKeys.HealthCondition,
        defaultValue: validation.values[PetFormKeys.HealthCondition]?.label
      }
    ]
  }
]

const secondStepDataItems = (validation: FormikValues) => [
  {
    title: 'Detalhes',
    items: [
      { label: 'Raça', key: PetFormKeys.BreedId, defaultValue: validation.values[PetFormKeys.BreedId]?.label || '' },
      { label: 'Cor', key: PetFormKeys.Color, defaultValue: validation.values[PetFormKeys.Color] || '' },
      { label: 'Anos', key: PetFormKeys.YearsAge, defaultValue: validation.values[PetFormKeys.YearsAge]?.label || '' },
      {
        label: 'Meses',
        key: PetFormKeys.MonthsAge,
        defaultValue: validation.values[PetFormKeys.MonthsAge]?.label || ''
      },
      {
        label: 'Descrição',
        key: PetFormKeys.Description,
        defaultValue: validation.values[PetFormKeys.Description] || ''
      },
      {
        label: 'Características',
        key: PetFormKeys.CharacteristicsIds,
        defaultValue: getCharacteristics(validation.values[PetFormKeys.CharacteristicsIds || []]).join(', ')
      }
    ]
  }
]

const thirdStepDataItems = (validation: FormikValues) => [
  {
    title: 'Endereço',
    items: [
      {
        label: 'CEP',
        key: PetFormKeys.Zipcode,
        defaultValue: formatZipcode(validation.values[PetFormKeys.Zipcode]) || ''
      },
      { label: 'Estado', key: PetFormKeys.State, defaultValue: validation.values[PetFormKeys.State]?.label || '' },
      { label: 'Cidade', key: PetFormKeys.City, defaultValue: validation.values[PetFormKeys.City]?.label || '' },
      { label: 'Rua', key: PetFormKeys.Street, defaultValue: validation.values[PetFormKeys.Street] || '' },
      { label: 'Número', key: PetFormKeys.Number, defaultValue: validation.values[PetFormKeys.Number] || '' },
      {
        label: 'Bairro',
        key: PetFormKeys.Neighborhood,
        defaultValue: validation.values[PetFormKeys.Neighborhood] || ''
      },
      {
        label: 'Complemento',
        key: PetFormKeys.Complement,
        defaultValue: validation.values[PetFormKeys.Complement] || ''
      }
    ]
  }
]

const getPreviewDataItems = (validation: FormikValues) => [
  ...firstStepDataItems(validation),
  ...secondStepDataItems(validation),
  ...thirdStepDataItems(validation)
]

export { getPreviewDataItems }
