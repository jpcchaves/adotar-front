import { PetModelMin } from 'src/domain/models/pet/PetModel'

export const updatePetFavorite = (pets: PetModelMin[], petId: string, newFavoriteValue: boolean) => {
  return pets?.map(pet => (pet.id === petId ? { ...pet, favorite: newFavoriteValue } : pet))
}
