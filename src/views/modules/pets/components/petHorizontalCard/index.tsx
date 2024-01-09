import { Icon } from '@iconify/react'
import { IconButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { MouseEvent, useState } from 'react'
import {
  CardButtonsContainer,
  CustomCardContent,
  CustomCardMedia,
  CustomHorizontalPetCard,
  Menu,
  MenuItem
} from './style'

const PetHorizontalCard = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <CustomHorizontalPetCard>
      <CustomCardMedia image='https://www.diariodepernambuco.com.br/static/app/foto_127989356258/2012/06/20/1955/20120620153018612649e.jpg' />
      <CustomCardContent>
        <Typography variant='h5' mb={5}>
          Pet Name
        </Typography>
        <Typography variant='body2'>Sexo: Macho ou Femea</Typography>
        <Typography variant='body2'>Idade: 1 ano e 6 meses</Typography>

        <CardButtonsContainer>
          <IconButton aria-controls='menu' aria-haspopup='true' onClick={handleClick}>
            <Icon icon={'mdi:dots-vertical'} />
          </IconButton>
          <Menu id='menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem>
              <ListItemIcon onClick={() => window.alert('edit')}>
                <Icon icon={'mdi:edit'} />
              </ListItemIcon>
              <ListItemText primary='Editar' />
            </MenuItem>
            <MenuItem>
              <ListItemIcon onClick={() => window.alert('delete')}>
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
