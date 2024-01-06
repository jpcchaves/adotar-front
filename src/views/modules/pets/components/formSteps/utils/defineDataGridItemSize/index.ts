import { PetFormKeys } from '../../Enum/PetFormKeys'

const columns = {
  TWELVE_COLUMNS: 12,
  FOUR_COLUMNS: 4,
  TWO_COLUMNS: 2
}

const defineDataGridItemSize = (key: PetFormKeys) => {
  switch (key) {
    case PetFormKeys.Description:
    case PetFormKeys.Complement:
    case PetFormKeys.CharacteristicsIds:
      return columns.TWELVE_COLUMNS
    case PetFormKeys.YearsAge:
    case PetFormKeys.MonthsAge:
      return columns.TWO_COLUMNS
    default:
      return columns.FOUR_COLUMNS
  }
}

export { defineDataGridItemSize }
