import { birdBreeds, catBreeds, dogBreeds, outrosBreeds } from '../../../data/breeds'

export const getSelectedPetType = (typeId: string) => {
  switch (typeId) {
    case '1':
      return dogBreeds
    case '2':
      return catBreeds
    case '3':
      return birdBreeds
    case '4':
      return outrosBreeds
    default:
      return []
  }
}
