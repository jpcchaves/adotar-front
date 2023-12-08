import { Icon } from '@iconify/react'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, OutlinedInputProps } from '@mui/material'
import { ChangeEvent, useState } from 'react'
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

const PasswordInput = ({ inputIdentifier, isInvalid, inputLabel, errorMessage, onChange, onBlur, ...rest }: IProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState)
  }

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={inputIdentifier}>{inputLabel}</InputLabel>

      <OutlinedInput
        {...rest}
        label={inputLabel}
        id={inputIdentifier}
        type={showPassword ? 'text' : 'password'}
        onChange={onChange}
        onBlur={onBlur}
        error={isInvalid}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              edge='end'
              onClick={toggleShowPassword}
              onMouseDown={toggleShowPassword}
              aria-label='toggle password visibility'
            >
              <Icon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
            </IconButton>
          </InputAdornment>
        }
      />
      {isInvalid && errorMessage && <FormFeedback errorMessage={errorMessage} />}
    </FormControl>
  )
}

export default PasswordInput
