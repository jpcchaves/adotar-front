import { petCharacteristics } from '../characteristics'

const getCharacteristics = (characteristicsIds: string[]) => {
  return characteristicsIds.map((id: string) => {
    const char = petCharacteristics.find(characteristic => characteristic.value === id)

    return char?.label
  })
}

export { getCharacteristics }
