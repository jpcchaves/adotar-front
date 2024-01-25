import { Box, Typography } from '@mui/material'
import { PetModelMin } from 'src/domain/models/pet/PetModel'
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
  pet: { id, name, petPictures, description },
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
        <Typography variant='h5' mb={5}>
          {name}
        </Typography>

        <Typography variant='subtitle2'>{description}</Typography>

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
