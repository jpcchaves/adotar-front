import { Box, Typography } from '@mui/material'
import { PetModelMin } from 'src/domain/models/pet/PetModel'
import { fallbackPetImage } from '../../contants'

interface IProps extends Pick<PetModelMin, 'name'> {
  petFavoritePicture: string
}

const CardOverlay = ({ petFavoritePicture, name }: IProps) => {
  return (
    <Box
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        padding: '16px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        opacity: 0,
        transition: 'opacity 0.3s ease-in-out',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        cursor: 'pointer',
        userSelect: 'none'
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
    >
      <img
        src={petFavoritePicture || fallbackPetImage}
        alt='Pet picture'
        style={{ width: 35, height: 35, objectFit: 'cover', borderRadius: '10%', marginRight: 10 }}
      />
      <Typography variant='subtitle2' sx={{ color: 'white', marginTop: 1.2 }}>
        {name}
      </Typography>
    </Box>
  )
}

export default CardOverlay
