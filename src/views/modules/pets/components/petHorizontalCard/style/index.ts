import styled from '@emotion/styled'
import { Box, BoxProps, Card, CardContent, CardMedia, CardMediaProps, CardProps, MenuProps } from '@mui/material'
import MuiMenu from '@mui/material/Menu'
import MuiMenuItem, { MenuItemProps } from '@mui/material/MenuItem'

const CustomHorizontalPetCard = styled(Card)<CardProps>(({}) => ({
  display: 'flex',
  flexDirection: 'row',
  position: 'relative'
}))

const CustomCardMedia = styled(CardMedia)<CardMediaProps>(() => ({
  width: '100%',
  objectFit: 'cover',
  height: 150
}))

const CustomCardContent = styled(CardContent)(() => ({
  width: '75%',
  display: 'flex',
  flexDirection: 'column'
}))

const CardButtonsContainer = styled(Box)<BoxProps>(() => ({
  height: '100%',
  position: 'absolute',
  right: 6,
  top: 6
}))

const Menu = styled(MuiMenu)<MenuProps>(({ theme }) => ({
  '& .MuiMenu-paper': {
    // @ts-ignore
    border: `1px solid ${theme.palette.divider}`
  }
}))

const MenuItem = styled(MuiMenuItem)<MenuItemProps>(({ theme }) => ({
  '&:hover': {
    // @ts-ignore
    backgroundColor: theme.palette.primary.main,
    '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
      // @ts-ignore
      color: theme.palette.common.white
    }
  }
}))

export { CardButtonsContainer, CustomCardContent, CustomCardMedia, CustomHorizontalPetCard, Menu, MenuItem }
