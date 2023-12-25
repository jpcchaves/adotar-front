import { FormControl, InputLabel, OutlinedInput, OutlinedInputProps } from '@mui/material'
import { CleaveOptions } from 'cleave.js/options'
import Cleave from 'cleave.js/react'
import { Props } from 'cleave.js/react/props'
import { ChangeEvent } from 'react'
import FormFeedback from 'src/@core/components/formFeedback'
import { getInputLabel } from '../../helpers/getInputLabel'

interface CleaveInputProps extends Props {
  inputRef: (ref: HTMLInputElement | null) => void
}

type OmittedInputProps = 'onChange' | 'onBlur'

interface IProps extends Omit<OutlinedInputProps, OmittedInputProps> {
  inputIdentifier: string
  inputLabel: string
  isInvalid?: boolean
  isRequired?: boolean
  errorMessage?: string | undefined
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onBlur: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const CleaveInput = ({ inputRef, ...rest }: CleaveInputProps) => {
  return <Cleave {...rest} htmlRef={inputRef} />
}

const ZipcodeInput = ({
  inputIdentifier,
  isInvalid = false,
  inputLabel,
  errorMessage = '',
  onChange,
  onBlur,
  isRequired = false,
  ...rest
}: IProps) => {
  const zipcodeDelimiters = ['.', '-']
  const cleaveOptions: CleaveOptions = { delimiters: zipcodeDelimiters, blocks: [2, 3, 3], numericOnly: true }

  return (
    <FormControl fullWidth error={isInvalid}>
      <InputLabel htmlFor={inputIdentifier}>{getInputLabel(inputLabel, isRequired)}</InputLabel>

      <OutlinedInput
        id={inputIdentifier}
        name={inputIdentifier}
        label={getInputLabel(inputLabel, isRequired)}
        type='text'
        onChange={onChange}
        onBlur={onBlur}
        inputComponent={CleaveInput as any}
        inputProps={{
          options: cleaveOptions,
          'data-testid': rest.name
        }}
        {...rest}
      />
      {isInvalid && errorMessage && <FormFeedback errorMessage={errorMessage} />}
    </FormControl>
  )
}

export default ZipcodeInput
