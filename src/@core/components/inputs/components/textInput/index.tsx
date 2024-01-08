import { Box, FormControl, FormHelperText, InputLabel, OutlinedInput, OutlinedInputProps } from '@mui/material'
import { ChangeEvent } from 'react'
import FormFeedback from '../../../formFeedback'
import { getInputLabel } from '../../helpers/getInputLabel'

type OmittedInputProps = 'onChange' | 'onBlur'

interface IProps extends Omit<OutlinedInputProps, OmittedInputProps> {
  inputIdentifier: string
  inputLabel: string
  isInvalid?: boolean
  isRequired?: boolean
  errorMessage?: string | undefined
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onBlur: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  characterLimit?: string
}

const TextInput = ({
  inputIdentifier,
  isInvalid = false,
  inputLabel,
  errorMessage = '',
  onChange,
  onBlur,
  isRequired = false,
  characterLimit = '',
  ...rest
}: IProps) => {
  return (
    <FormControl fullWidth error={isInvalid}>
      <InputLabel htmlFor={inputIdentifier}>{getInputLabel(inputLabel, isRequired)}</InputLabel>
      <OutlinedInput
        {...rest}
        id={inputIdentifier}
        label={getInputLabel(inputLabel, isRequired)}
        type='text'
        onChange={onChange}
        onBlur={onBlur}
      />
      <Box display={'flex'} justifyContent={isInvalid ? 'space-between' : 'end'} alignItems={'center'}>
        {isInvalid && errorMessage && <FormFeedback errorMessage={errorMessage} />}
        {characterLimit && <FormHelperText sx={{ mr: '4px', my: '5px' }}>{characterLimit}</FormHelperText>}
      </Box>
    </FormControl>
  )
}

export default TextInput
