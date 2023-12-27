import { FormControl, InputLabel, OutlinedInput, OutlinedInputProps } from '@mui/material'
import { FormikErrors, FormikValues } from 'formik'
import { ChangeEvent } from 'react'
import FormFeedback from 'src/@core/components/formFeedback'
import { extractZipcode } from 'src/utils/common/zipcode/extractRawZipcode'
import { states } from 'src/views/modules/pets/data/geolocation/states'
import { getInputLabel } from '../../helpers/getInputLabel'
import ZipcodeMask from './components/zipcodeMask'

export interface ViaCepAddress {
  cep?: string
  logradouro?: string
  complemento?: string
  bairro?: string
  localidade?: string
  uf?: string
  ibge?: string
  gia?: string
  ddd?: string
  siafi?: string
}

type OmittedInputProps = 'onChange' | 'onBlur'

const VIA_CEP_ENDPOINT = process.env.NEXT_PUBLIC_VIA_CEP_ENDPOINT

interface IProps extends Omit<OutlinedInputProps, OmittedInputProps> {
  inputIdentifier: string
  inputLabel: string
  isInvalid?: boolean
  isRequired?: boolean
  errorMessage?: string | undefined
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onBlur: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<FormikValues>>
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
        onChange={async e => {
          const { value: maskedValue } = e.target
          const unmaskedValue = extractZipcode(maskedValue)
          const event = {
            ...e,
            target: {
              name: inputIdentifier,
              value: unmaskedValue
            }
          }

          onChange(event as ChangeEvent<HTMLInputElement>)

          if (unmaskedValue?.length === 8) {
            try {
              const res = await fetch(`${VIA_CEP_ENDPOINT}/${unmaskedValue}/json`)

              if (res.ok) {
                const viaCepAddress: ViaCepAddress = await res.json()

                const state = states.find(state => state.uf === viaCepAddress.uf)

                if (state) {
                  setFieldValue('state', state.value)
                }

                setFieldValue('city', viaCepAddress.ibge || '')

                setFieldValue('neighborhood', viaCepAddress.bairro || '')

                setFieldValue('street', viaCepAddress.logradouro || '')
              }
            } catch (err) {
              // console.log(err)
            }
          }
        }}
        inputComponent={ZipcodeMask as any}
      />
      {isInvalid && errorMessage && <FormFeedback errorMessage={errorMessage} />}
    </FormControl>
  )
}

export default ZipcodeInput
