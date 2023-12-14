import { PetPicture } from 'src/domain/models/pet/PetPicture'

export const getPetFavPicture = (petPictures: PetPicture[]) => {
  let favoritePic = ''
  petPictures.map(picture => {
    if (picture.favorite === true) {
      favoritePic = picture.imgUrl
    }
  })

  return favoritePic
}
