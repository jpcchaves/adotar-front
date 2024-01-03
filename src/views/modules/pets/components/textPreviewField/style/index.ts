import styled from '@emotion/styled'
import { Paper, PaperProps } from '@mui/material'

const StyledPaper = styled(Paper)<PaperProps>(({ theme }) => ({
  padding: '10px 0 10px 5px',
  borderRadius: '5px',
  userSelect: 'none',

  //@ts-ignore
  background: theme.palette.action.disabledBackground
}))

export { StyledPaper }
