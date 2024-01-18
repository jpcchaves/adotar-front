import { Icon } from '@iconify/react'
import { Box, IconButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { MouseEvent, useState } from 'react'
import { PetModelMin } from 'src/domain/models/pet/PetModel'
import { fallbackPetImage } from '../petCard/contants'
import {
  CardButtonsContainer,
  CustomCardContent,
  CustomCardMedia,
  CustomHorizontalPetCard,
  Menu,
  MenuItem
} from './style'

interface IProps {
  pet: PetModelMin
  getPetDetails: (id: string) => Promise<void>
}

const PetHorizontalCard = ({ pet: { id, name, petPictures, description }, getPetDetails }: IProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <CustomHorizontalPetCard>
      <Box padding={4} width={'25%'}>
        <CustomCardMedia sx={{ width: '100%' }} image={petPictures.length ? petPictures[0] : fallbackPetImage} />
      </Box>
      <CustomCardContent>
        <Typography variant='h5' mb={5}>
          {name}
        </Typography>

        <Typography variant='subtitle2'>{description}</Typography>
        <CardButtonsContainer>
          <IconButton aria-controls='menu' aria-haspopup='true' onClick={handleClick}>
            <Icon icon={'mdi:dots-vertical'} />
          </IconButton>
          <Menu id='menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={() => getPetDetails(id)}>
              <ListItemIcon>
                <Icon icon={'mdi:edit'} />
              </ListItemIcon>
              <ListItemText primary='Editar' />
            </MenuItem>
            <MenuItem onClick={() => window.alert('delete')}>
              <ListItemIcon>
                <Icon icon={'mdi:trash'} />
              </ListItemIcon>
              <ListItemText primary='Deletar' />
            </MenuItem>
          </Menu>
        </CardButtonsContainer>
      </CustomCardContent>
    </CustomHorizontalPetCard>
  )
}

export default PetHorizontalCard
