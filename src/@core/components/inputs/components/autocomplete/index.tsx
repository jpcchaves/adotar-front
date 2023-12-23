import { Autocomplete, AutocompleteProps, FormControl, TextField } from '@mui/material'

import { FormikValues } from 'formik'
import FormFeedback from 'src/@core/components/formFeedback'
import { getInputLabel } from '../../helpers/getInputLabel'
import { MenuItem } from '../../models/menuItem/MenuItem'

interface IProps extends Omit<AutocompleteProps<any, any, any, any>, 'renderInput' | 'options'> {
  inputIdentifier: string
  inputLabel: string
  isInvalid?: boolean
  isRequired?: boolean
  errorMessage?: string | undefined
  menuItems: MenuItem[]
  validation: FormikValues
}

const AutocompleteInput = ({
  validation,
  inputIdentifier,
  isInvalid,
  inputLabel,
  errorMessage = '',
  isRequired = false,
  menuItems,
  ...rest
}: IProps) => {
  return (
    <FormControl fullWidth>
      <Autocomplete
        {...rest}
        id={inputIdentifier}
        options={menuItems}
        onChange={(e, newValue) => {
          validation.setFieldValue(inputIdentifier, newValue)
        }}
        onBlur={validation.handleBlur}
        renderInput={params => {
          return (
            <>
              <TextField
                error={!!(isInvalid && errorMessage)}
                {...params}
                label={getInputLabel(inputLabel, isRequired)}
                id={inputIdentifier}
              />
            </>
          )
        }}
      />
      {!!(isInvalid && errorMessage) && <FormFeedback errorMessage={errorMessage} />}
    </FormControl>
  )
}

export default AutocompleteInput
