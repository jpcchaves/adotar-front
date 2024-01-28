import { Icon } from '@iconify/react'
import { CardMedia, IconButton } from '@mui/material'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { PetPictureDTO } from 'src/domain/DTO/pet/PetPictureDTO'
import { fallbackPetImage } from '../../contants/petFallbackImage/petFallbackImage'

interface IProps {
  petPictures: PetPictureDTO[]
  petFavoritePicture: string
}

const CardImageSlider = ({ petPictures, petFavoritePicture }: IProps) => {
  const slideProperties = {
    prevArrow: (
      <IconButton disableTouchRipple disableFocusRipple disableRipple size='small' sx={{ bgcolor: '#FFF', ml: 2 }}>
        <Icon color='#000' icon='ic:round-arrow-left' />
      </IconButton>
    ),
    nextArrow: (
      <IconButton disableTouchRipple disableFocusRipple disableRipple size='small' sx={{ bgcolor: '#FFF', mr: 2 }}>
        <Icon color='#000' icon='ic:round-arrow-right' />
      </IconButton>
    ),
    autoplay: false
  }

  return (
    <Slide {...slideProperties}>
      {petPictures.length ? (
        petPictures.map(({ imgUrl }, idx) => <CardMedia key={`${imgUrl}-${idx}`} sx={{ height: 300 }} image={imgUrl} />)
      ) : (
        <CardMedia sx={{ height: 300 }} image={petFavoritePicture || fallbackPetImage} />
      )}
    </Slide>
  )
}

export default CardImageSlider
