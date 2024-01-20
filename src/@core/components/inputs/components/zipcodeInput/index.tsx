import { FormControl, InputLabel, OutlinedInput, OutlinedInputProps } from '@mui/material'
import { FormikErrors, FormikValues } from 'formik'
import { ChangeEvent } from 'react'
import FormFeedback from 'src/@core/components/formFeedback'
import { getInputLabel } from '../../helpers/getInputLabel'
import useHandleZipcodeChange from './components/hooks/useHandleZipcodeChange'
import ZipcodeMask from './components/zipcodeMask'

type OmittedInputProps = 'onChange' | 'onBlur'

interface IProps extends Omit<OutlinedInputProps, OmittedInputProps> {
  inputIdentifier: string
  inputLabel: string
  isInvalid?: boolean
  isRequired?: boolean
  errorMessage?: string | undefined
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onBlur: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<FormikValues>>
  value: string
}

const ZipcodeInput = ({
  inputIdentifier,
  isInvalid = false,
  inputLabel,
  errorMessage = '',
  onChange,
  onBlur,
  isRequired = false,
  setFieldValue,
  value,
  ...rest
}: IProps) => {
  const { handleZipcodeChange } = useHandleZipcodeChange({ inputIdentifier, onChange, setFieldValue, value })

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
        onChange={handleZipcodeChange}
        inputComponent={ZipcodeMask as any}
      />
      {isInvalid && errorMessage && <FormFeedback errorMessage={errorMessage} />}
    </FormControl>
  )
}

export default ZipcodeInput
