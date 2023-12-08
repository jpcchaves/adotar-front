import { FormControl, InputLabel, OutlinedInput, OutlinedInputProps } from '@mui/material'
import { ChangeEvent } from 'react'
import FormFeedback from '../../formFeedback'

type OmittedInputProps = 'onChange' | 'onBlur'

interface IProps extends Omit<OutlinedInputProps, OmittedInputProps> {
  inputIdentifier: string
  inputLabel: string
  isInvalid: boolean
  errorMessage: string | undefined
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onBlur: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const TextInput = ({ inputIdentifier, isInvalid, inputLabel, errorMessage, onChange, onBlur, ...rest }: IProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={inputIdentifier}>{inputLabel}</InputLabel>

      <OutlinedInput
        {...rest}
        id={inputIdentifier}
        label={inputLabel}
        type='text'
        onChange={onChange}
        onBlur={onBlur}
        error={isInvalid}
      />
      {isInvalid && errorMessage && <FormFeedback errorMessage={errorMessage} />}
    </FormControl>
  )
}

export default TextInput
