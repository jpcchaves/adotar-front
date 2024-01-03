import { Box, TextField } from '@mui/material'

interface IProps {
  defaultValue: string
}

const TextPreviewField = ({ defaultValue }: IProps) => {
  return (
    <Box>
      <TextField
        fullWidth
        variant='filled'
        value={defaultValue}
        InputProps={{
          readOnly: true,
          style: { textAlign: 'center', fontSize: '16px', paddingTop: '-12px' },
          inputProps: {
            style: {
              lineHeight: 'unset'
            }
          }
        }}
      />
    </Box>
  )
}

export default TextPreviewField
