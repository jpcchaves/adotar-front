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

const PetDetailsHeader = () => {
  const { petById } = useAppSelector(state => state.pets)

  return (
    <Card>
      <CardMedia
        component='img'
        alt='pet-profile-header'
        image={
          'https://conteudo.imguol.com.br/c/noticias/0f/2022/06/26/mr-happy-face-eleito-o-cao-mais-feio-do-mundo-1656267028638_v2_450x600.png.webp'
        }
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
        <ProfilePicture
          src={
            'https://conteudo.imguol.com.br/c/noticias/0f/2022/06/26/mr-happy-face-eleito-o-cao-mais-feio-do-mundo-1656267028638_v2_450x600.png.webp'
          }
          alt='profile-picture'
        />
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
          <Button variant='contained' startIcon={<Icon icon='mdi:export-variant' fontSize={20} />}>
            Cartão do PET
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PetDetailsHeader
