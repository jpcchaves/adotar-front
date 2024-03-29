import { Box, Button, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'
import { Gender } from 'src/domain/enum/pet/Gender'
import { PetModelMin } from 'src/domain/models/pet/PetModel'
import useNavigation from 'src/hooks/navigation/useNavigation'
import { toggleSavedPetAction } from '../../models/savedPetActions'
import { CardImageSlider } from './components'
import CardOverlay from './components/cardOverlay'
import { gendersColors } from './utils'

interface IProps {
  pet: PetModelMin
  toggleSavedPet: (petId: string, action: toggleSavedPetAction) => void
}

const PetCard = ({ pet: { petPictures, name, description, favorite, gender, id, breed }, toggleSavedPet }: IProps) => {
  const { navigate } = useNavigation()
  const isMale = gender === Gender.M

  return (
    <Card>
      <Box style={{ position: 'relative' }}>
        <CardImageSlider petPictures={petPictures} petFavoritePicture={petPictures[0]?.imgUrl} />
        <CardOverlay petFavoritePicture={petPictures[0]?.imgUrl} name={name} />
      </Box>
      <CardContent sx={{ pt: 4 }}>
        <Box display='flex' justifyContent={'space-between'} mb={5}>
          <Typography
            variant='h6'
            sx={{
              maxWidth: '100%',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis'
            }}
          >
            {name}
          </Typography>
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={1}>
            <IconButton
              aria-label='favorite heart button'
              color='error'
              onClick={favorite ? () => toggleSavedPet(id, 'REMOVE') : () => toggleSavedPet(id, 'ADD')}
            >
              <Icon icon={favorite ? 'mdi:heart' : 'mdi:heart-outline'} />
            </IconButton>
            <IconButton
              disableTouchRipple
              disableFocusRipple
              disableRipple
              aria-label='pet gender icon'
              sx={{ color: isMale ? gendersColors.male : gendersColors.female }}
            >
              <Icon icon={isMale ? 'mdi:gender-male' : 'mdi:gender-female'} />
            </IconButton>
          </Box>
        </Box>
        <Box mb={2}>
          <Typography
            variant='body2'
            sx={{
              maxWidth: '100%',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis'
            }}
          >
            {breed}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant='body2'
            sx={{
              maxWidth: '100%',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis'
            }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button fullWidth variant='contained' onClick={() => navigate(`/pets/detalhes/${id}`)}>
          Ver Detalhes
        </Button>
      </CardActions>
    </Card>
  )
}

export default PetCard
