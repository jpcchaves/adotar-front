// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import Icon from 'src/@core/components/icon'
import { useAppSelector } from 'src/hooks/useRedux'
import { ProfilePicture } from './style'

interface IProps {
  generatePetCardPdf: (petId: string | undefined) => void
}

const PetDetailsHeader = ({ generatePetCardPdf }: IProps) => {
  const { petById } = useAppSelector(state => state.pets)

  return (
    <Card>
      <CardMedia
        component='img'
        alt='pet-profile-header'
        image={petById?.petPictures[0]?.imgUrl}
        sx={{
          height: { xs: 150, md: 250 }
        }}
      />
      <CardContent
        sx={{
          pt: 0,
          mt: -8,
          display: 'flex',
          alignItems: 'flex-end',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          justifyContent: { xs: 'center', md: 'flex-start' }
        }}
      >
        <ProfilePicture src={petById?.petPictures[0]?.imgUrl} alt='profile-picture' />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            ml: { xs: 0, md: 6 },
            alignItems: 'flex-end',
            flexWrap: ['wrap', 'nowrap'],
            justifyContent: ['center', 'space-between']
          }}
        >
          <Box sx={{ mb: [6, 0], display: 'flex', flexDirection: 'column', alignItems: ['center', 'flex-start'] }}>
            <Typography variant='h5' sx={{ mb: 4, fontSize: '1.375rem' }}>
              {petById?.name}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: ['center', 'flex-start']
              }}
            >
              <Box sx={{ mr: 4, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}>
                <Icon icon={'mdi:paw-outline'} />
                <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>{petById?.breed}</Typography>
              </Box>
              <Box sx={{ mr: 4, display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'text.secondary' } }}>
                <Icon icon='mdi:map-marker-outline' />
                <Typography sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  {petById?.address?.city}, {petById?.address?.state}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Button
            variant='contained'
            startIcon={<Icon icon='mdi:export-variant' fontSize={20} />}
            onClick={() => generatePetCardPdf(petById?.id)}
          >
            Cartão do PET
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PetDetailsHeader
