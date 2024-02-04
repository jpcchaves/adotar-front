import { useGetBreeds } from '../../../data/breeds'

export const GetSelectedPetType = (typeId: string) => {
  const { memorizedBirdBreeds, memorizedCatBreeds, memorizedDogBreeds, memorizedOutroBirds } = useGetBreeds()

  switch (typeId) {
    case '1':
      return memorizedDogBreeds
    case '2':
      return memorizedCatBreeds
    case '3':
      return memorizedBirdBreeds
    case '4':
      return memorizedOutroBirds
    default:
      return []
  }
}
