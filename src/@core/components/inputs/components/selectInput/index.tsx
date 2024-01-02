import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps
} from '@mui/material'
import { ChangeEvent } from 'react'
import FormFeedback from '../../../formFeedback'
import { getInputLabel } from '../../helpers/getInputLabel'

type OmittedSelectProps = 'onChange' | 'onBlur'

export type MenuItem = {
  value: string
  label: string
}

interface IProps extends Omit<SelectProps, OmittedSelectProps> {
  inputIdentifier: string
  inputLabel: string
  isInvalid?: boolean
  isRequired?: boolean
  errorMessage?: string | undefined
  helperText?: string | null
  menuItems: MenuItem[]
  setFieldValue?: (field: string, value: any) => void
  onBlur: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const SelectInput = ({
  inputIdentifier,
  isInvalid = false,
  inputLabel,
  errorMessage = '',
  setFieldValue,
  onBlur,
  isRequired = false,
  helperText = null,
  menuItems = [],
  value,
  ...rest
}: IProps) => {
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const selectedObject = menuItems.find(option => option.value === event.target.value)
    if (setFieldValue) setFieldValue(inputIdentifier, selectedObject)
  }

  return (
    <FormControl fullWidth error={isInvalid}>
      <InputLabel id={inputIdentifier}>{getInputLabel(inputLabel, isRequired)}</InputLabel>
      <Select
        {...rest}
        label={getInputLabel(inputLabel, isRequired)}
        id={inputIdentifier}
        name={inputIdentifier}
        onChange={handleChange}
        onBlur={onBlur}
        value={value}
        labelId={inputIdentifier}
        MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
      >
        {(menuItems || []).map(({ label, value }, idx) => (
          <MenuItem key={`${label}-${idx}`} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {isInvalid && errorMessage && <FormFeedback errorMessage={errorMessage} />}
    </FormControl>
  )
}

export default SelectInput
