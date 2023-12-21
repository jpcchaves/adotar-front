import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, SelectProps } from '@mui/material'
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
  menuItems: MenuItem[]
  onChange: (event: SelectChangeEvent<unknown>) => void
  onBlur: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const SelectInput = ({
  inputIdentifier,
  isInvalid = false,
  inputLabel,
  errorMessage = '',
  onChange,
  onBlur,
  isRequired = false,
  menuItems = [],
  ...rest
}: IProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={inputIdentifier}>{getInputLabel(inputLabel, isRequired)}</InputLabel>
      <Select
        {...rest}
        label={getInputLabel(inputLabel, isRequired)}
        id={inputIdentifier}
        name={inputIdentifier}
        onChange={onChange}
        onBlur={onBlur}
        labelId={inputIdentifier}
        error={isInvalid}
      >
        {(menuItems || []).map(({ label, value }, idx) => (
          <MenuItem key={`${label}-${idx}`} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      {isInvalid && errorMessage && <FormFeedback errorMessage={errorMessage} />}
    </FormControl>
  )
}

export default SelectInput