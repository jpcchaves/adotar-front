import { Box, Typography } from '@mui/material'
import { PetModelMin } from 'src/domain/models/pet/PetModel'
import { getGenderString } from '../../utils/gender/getGenderString'
import { fallbackPetImage } from '../petCard/contants'
import CardMenu from './components/cardMenu'
import { CustomCardContent, CustomCardMedia, CustomHorizontalPetCard } from './style'

interface IProps {
  pet: PetModelMin
  getPetDetails: (id: string) => Promise<void>
  setSelectedPetId: (prevState: string) => void
  toggleDeleteModal: () => void
}

const PetHorizontalCard = ({
  pet: { id, name, petPictures, description, gender, breed, createdAt },
  getPetDetails,
  setSelectedPetId,
  toggleDeleteModal
}: IProps) => {
  return (
    <CustomHorizontalPetCard>
      <Box padding={4} width={'40%'}>
        <CustomCardMedia sx={{ width: '100%' }} image={petPictures.length ? petPictures[0].imgUrl : fallbackPetImage} />
      </Box>
      <CustomCardContent>
        <Typography variant='h5' mb={2}>
          {name}
        </Typography>

        <Box mb={2}>
          <Typography variant='overline' py={0} lineHeight={0}>
            Descrição:
          </Typography>
          <Typography variant='subtitle2'>{description}</Typography>
        </Box>

        <Box mb={2}>
          <Typography variant='overline' py={0} lineHeight={0}>
            Raça:
          </Typography>
          <Typography variant='subtitle2'>{breed}</Typography>
        </Box>

        <Box mb={2}>
          <Typography variant='overline' py={0} lineHeight={0}>
            Sexo:
          </Typography>
          <Typography variant='subtitle2'> {getGenderString(gender)}</Typography>
        </Box>

        <Box position='absolute' bottom={10} right={10} sx={{ userSelect: 'none' }}>
          <Typography variant='subtitle2' fontStyle='italic' fontWeight='lighter' fontSize={'10px'}>
            Adicionado em {new Date(createdAt).toLocaleDateString()}
          </Typography>
        </Box>

        <CardMenu
          id={id}
          getPetDetails={getPetDetails}
          setSelectedPetId={setSelectedPetId}
          toggleDeleteModal={toggleDeleteModal}
        />
      </CustomCardContent>
    </CustomHorizontalPetCard>
  )
}

export default PetHorizontalCard
