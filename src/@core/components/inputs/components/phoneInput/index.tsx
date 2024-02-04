import { FormControl, InputLabel, OutlinedInput, OutlinedInputProps } from '@mui/material'
import { ChangeEvent } from 'react'
import FormFeedback from 'src/@core/components/formFeedback'
import { getInputLabel } from '../../helpers/getInputLabel'
import PhoneMask from './components/phoneMask'

type OmittedInputProps = 'onChange' | 'onBlur'

interface IProps extends Omit<OutlinedInputProps, OmittedInputProps> {
  inputIdentifier: string
  inputLabel: string
  isInvalid?: boolean
  isRequired?: boolean
  errorMessage?: string | undefined
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onBlur: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  value: string
}

const PhoneInput = ({
  inputIdentifier,
  isInvalid = false,
  inputLabel,
  errorMessage = '',
  onBlur,
  isRequired = false,
  ...rest
}: IProps) => {
  return (
    <FormControl fullWidth error={isInvalid}>
      <InputLabel htmlFor={inputIdentifier}>{getInputLabel(inputLabel, isRequired)}</InputLabel>
      <OutlinedInput
        {...rest}
        id={inputIdentifier}
        name={inputIdentifier}
        type='text'
        label={getInputLabel(inputLabel, isRequired)}
        onBlur={onBlur}
        inputComponent={PhoneMask as any}
      />
      {isInvalid && errorMessage && <FormFeedback errorMessage={errorMessage} />}
    </FormControl>
  )
}

export default PhoneInput
