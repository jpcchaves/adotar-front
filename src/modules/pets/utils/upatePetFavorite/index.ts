import { PetModelMin } from "modules/pets/models/PetModel";

export const updatePetFavorite = (pets: PetModelMin[], petId: string, newFavoriteValue: boolean) => {
  return pets?.map((pet) => (pet.id === petId ? { ...pet, favorite: newFavoriteValue } : pet));
};
