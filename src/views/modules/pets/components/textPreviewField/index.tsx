import { StyledPaper } from './style'

interface IProps {
  defaultValue: string
}

const TextPreviewField = ({ defaultValue = '' }: IProps) => {
  return (
    <StyledPaper
      variant='outlined'
      style={{ padding: '10px 0 10px 5px', borderRadius: '5px', userSelect: 'none', overflow: 'hidden' }}
    >
      {defaultValue}
    </StyledPaper>
  )
}

export default TextPreviewField
