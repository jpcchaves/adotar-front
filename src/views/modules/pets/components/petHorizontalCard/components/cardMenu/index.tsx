import styled from '@emotion/styled'
import { Icon } from '@iconify/react'
import { Box, BoxProps, IconButton, ListItemIcon, ListItemText, Menu } from '@mui/material'
import { MouseEvent, useCallback, useState } from 'react'
import { MenuItem } from '../../style'

const CardButtonsContainer = styled(Box)<BoxProps>(() => ({
  height: '100%',
  position: 'absolute',
  right: 6,
  top: 6
}))

interface IProps {
  id: string
  getPetDetails: (id: string) => void
  setSelectedPetId: (prevState: string) => void
  toggleDeleteModal: () => void
}

const CardMenu = ({ id, getPetDetails, setSelectedPetId, toggleDeleteModal }: IProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  return (
    <CardButtonsContainer>
      <IconButton aria-controls='menu' aria-haspopup='true' onClick={handleClick}>
        <Icon icon={'mdi:dots-vertical'} />
      </IconButton>
      <Menu id='menu' anchorEl={anchorEl} keepMounted={false} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            getPetDetails(id)
            handleClose()
          }}
        >
          <ListItemIcon>
            <Icon icon={'mdi:edit'} />
          </ListItemIcon>
          <ListItemText primary='Editar' />
        </MenuItem>
        <MenuItem
          onClick={() => {
            toggleDeleteModal()
            setSelectedPetId(id)
            handleClose()
          }}
        >
          <ListItemIcon>
            <Icon icon={'mdi:trash'} />
          </ListItemIcon>
          <ListItemText primary='Deletar' />
        </MenuItem>
      </Menu>
    </CardButtonsContainer>
  )
}

export default CardMenu
