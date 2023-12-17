// ** React Imports
import { ReactNode, SyntheticEvent } from 'react'

// ** MUI Imports
import { styled } from '@mui/material/styles'

interface FloatButtonProps {
  className?: string
  children: ReactNode
  onClick: (e: SyntheticEvent) => void
}

const FloatButtonStyled = styled('div')(({ theme }) => ({
  zIndex: 11,
  position: 'fixed',
  right: theme.spacing(6),
  bottom: theme.spacing(8)
}))

const FloatButton = ({ children, className, onClick }: FloatButtonProps) => {
  return (
    <FloatButtonStyled onClick={onClick} className={className} role='presentation'>
      {children}
    </FloatButtonStyled>
  )
}

export default FloatButton
