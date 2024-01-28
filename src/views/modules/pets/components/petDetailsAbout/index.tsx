// ** MUI Components
import { Icon } from '@iconify/react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// ** Icon Imports

const PetDetailsAbout = () => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ mb: 7 }}>
          <Typography variant='body2' sx={{ mb: 4, color: 'text.disabled', textTransform: 'uppercase' }}>
            Sobre
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              '&:not(:last-of-type)': { mb: 4 }
            }}
          >
            <Icon icon='mdi:circle-medium' />

            <Typography sx={{ mx: 2, fontWeight: 600, color: 'text.secondary' }}>Espécie:</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Cachorro</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              '&:not(:last-of-type)': { mb: 4 }
            }}
          >
            <Icon icon='mdi:circle-medium' />

            <Typography sx={{ mx: 2, fontWeight: 600, color: 'text.secondary' }}>Gênero:</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Macho</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              '&:not(:last-of-type)': { mb: 4 }
            }}
          >
            <Icon icon='mdi:circle-medium' />

            <Typography sx={{ mx: 2, fontWeight: 600, color: 'text.secondary' }}>Raça:</Typography>
            <Typography sx={{ color: 'text.secondary' }}>SRD Sem Raça Definida</Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              '&:not(:last-of-type)': { mb: 4 }
            }}
          >
            <Icon icon='mdi:circle-medium' />

            <Typography sx={{ mx: 2, fontWeight: 600, color: 'text.secondary' }}>Cor:</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Branquinha da Adasi</Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              '&:not(:last-of-type)': { mb: 4 }
            }}
          >
            <Icon icon='mdi:circle-medium' />

            <Typography sx={{ mx: 2, fontWeight: 600, color: 'text.secondary' }}>Idade:</Typography>
            <Typography sx={{ color: 'text.secondary' }}>24 anos e 11 meses</Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              '&:not(:last-of-type)': { mb: 4 }
            }}
          >
            <Icon icon='mdi:circle-medium' />

            <Typography sx={{ mx: 2, fontWeight: 600, color: 'text.secondary' }}>Porte:</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Muito Pequeno</Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              '&:not(:last-of-type)': { mb: 4 }
            }}
          >
            <Icon icon='mdi:circle-medium' />

            <Typography sx={{ mx: 2, fontWeight: 600, color: 'text.secondary' }}>Característica(s):</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Castrado, Vermifugado, Brincalhao, Carinhoso, Lida bem com visitas
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mb: 7 }}>
          <Typography variant='body2' sx={{ mb: 4, color: 'text.disabled', textTransform: 'uppercase' }}>
            Tutor
          </Typography>
        </Box>
        <Box>
          <Typography variant='body2' sx={{ mb: 4, color: 'text.disabled', textTransform: 'uppercase' }}>
            Caracteristicas
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PetDetailsAbout
