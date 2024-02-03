import styled from '@emotion/styled'
import { Button, ButtonProps } from '@mui/material'
import { ElementType } from 'react'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,

  // @ts-ignore
  marginRight: theme.spacing(5),

  // @ts-ignore
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)<ButtonProps & { component?: ElementType; htmlFor?: string }>(({ theme }) => ({
  // @ts-ignore
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  // @ts-ignore
  marginLeft: theme.spacing(4),

  // @ts-ignore
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',

    // @ts-ignore
    marginTop: theme.spacing(4)
  }
}))

export { ButtonStyled, ImgStyled, ResetButtonStyled }
