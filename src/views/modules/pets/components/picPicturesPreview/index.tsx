import { Icon } from '@iconify/react'
import { Box, IconButton } from '@mui/material'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { PictureModel } from 'src/@core/components/inputs/models/picture/PictureModel'

interface IProps {
  petPictures: PictureModel[]
}

const PetPicturesPreview = ({ petPictures }: IProps) => {
  const slideProperties = {
    prevArrow: (
      <IconButton disableTouchRipple disableFocusRipple disableRipple size='small' sx={{ bgcolor: '#FFF', ml: 2 }}>
        <Icon color='#000' icon='ic:round-arrow-left' height={24} />
      </IconButton>
    ),
    nextArrow: (
      <IconButton disableTouchRipple disableFocusRipple disableRipple size='small' sx={{ bgcolor: '#FFF', mr: 2 }}>
        <Icon color='#000' icon='ic:round-arrow-right' height={24} />
      </IconButton>
    ),
    autoplay: false
  }

  return (
    <Slide {...slideProperties}>
      {(petPictures || []).map(({ imgUrl }: { imgUrl: string }, idx: number) => (
        <Box key={idx} display={'flex'} justifyContent={'center'}>
          <img src={imgUrl} alt='swiper 7' width={'250px'} height={'250px'} style={{ objectFit: 'cover' }} />
        </Box>
      ))}
    </Slide>
  )
}

export default PetPicturesPreview
