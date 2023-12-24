import { Box, Chip, FormControl, InputLabel, MenuItem, Select, SelectProps } from '@mui/material'
import { FormikValues } from 'formik'
import FormFeedback from 'src/@core/components/formFeedback'
import { findLabels } from '../../helpers/findLabels'
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
  validation: FormikValues
}
const SelectMulti = ({
  inputIdentifier,
  isInvalid = false,
  inputLabel,
  errorMessage = '',
  validation,
  isRequired = false,
  menuItems = [],
  ...rest
}: IProps) => {
  return (
    <FormControl fullWidth error={isInvalid}>
      <InputLabel id={inputIdentifier}>{getInputLabel(inputLabel, isRequired)}</InputLabel>

      <Select
        {...rest}
        label={getInputLabel(inputLabel, isRequired)}
        id={inputIdentifier}
        name={inputIdentifier}
        multiple
        MenuProps={{ PaperProps: { sx: { maxHeight: 150 } } }}
        onChange={validation.handleChange}
        onBlur={validation.handleBlur}
        renderValue={selected => {
          return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {(selected as unknown as string[]).map(value => (
                <Chip key={value} label={findLabels(menuItems, value)} sx={{ m: 0.75 }} />
              ))}
            </Box>
          )
        }}
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

export default SelectMulti
