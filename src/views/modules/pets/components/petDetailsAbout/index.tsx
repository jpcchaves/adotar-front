// ** MUI Components
import { Icon } from '@iconify/react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useAppSelector } from 'src/hooks/useRedux'
import { getPetAgeString } from '../../utils/age/getPetAge'
import { getGenderString } from '../../utils/gender/getGenderString'

// ** Icon Imports

const PetDetailsAbout = () => {
  const { petById } = useAppSelector(state => state.pets)
  const gender = petById?.gender
  const petAge = { years: petById?.yearsAge, months: petById?.monthsAge }

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
            <Typography sx={{ color: 'text.secondary' }}>{petById?.type}</Typography>
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
            <Typography sx={{ color: 'text.secondary' }}>{getGenderString(gender!)}</Typography>
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
            <Typography sx={{ color: 'text.secondary' }}>{petById?.breed}</Typography>
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
            <Typography sx={{ color: 'text.secondary' }}>{petById?.color}</Typography>
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
            <Typography sx={{ color: 'text.secondary' }}>{getPetAgeString(petAge.years!, petAge.months!)}</Typography>
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
            <Typography sx={{ color: 'text.secondary' }}>{petById?.size}</Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              '&:not(:last-of-type)': { mb: 4 }
            }}
          >
            <Box display='flex' alignItems='center'>
              <Icon icon='mdi:circle-medium' />

              <Typography sx={{ mx: 2, fontWeight: 600, color: 'text.secondary' }}>Característica(s):</Typography>
            </Box>
            <Typography sx={{ color: 'text.secondary' }}>
              {petById?.characteristics.map(c => c.characteristic).join(', ')}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mb: 7 }}>
          <Typography variant='body2' sx={{ mb: 4, color: 'text.disabled', textTransform: 'uppercase' }}>
            Tutor
          </Typography>

          <Box
            sx={{
              display: 'flex',
              '&:not(:last-of-type)': { mb: 4 }
            }}
          >
            <Icon icon='mdi:circle-medium' />

            <Typography sx={{ mx: 2, fontWeight: 600, color: 'text.secondary' }}>Nome do tutor:</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Joao Paulo</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PetDetailsAbout
