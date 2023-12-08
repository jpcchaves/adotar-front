import { FormHelperText } from '@mui/material'

interface IProps {
  errorMessage: string
}

const FormFeedback = ({ errorMessage }: IProps) => {
  return <FormHelperText sx={{ color: 'error.main', ml: '4px', my: '5px' }}>{errorMessage}</FormHelperText>
}

export default FormFeedback
