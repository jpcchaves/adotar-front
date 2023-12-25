import { FormControl, InputLabel, OutlinedInput, OutlinedInputProps } from '@mui/material'
import { CleaveOptions } from 'cleave.js/options'
import Cleave from 'cleave.js/react'
import { Props } from 'cleave.js/react/props'
import { FormikErrors, FormikValues } from 'formik'
import { ChangeEvent } from 'react'
import FormFeedback from 'src/@core/components/formFeedback'
import { extractZipcode } from 'src/utils/common/zipcode/extractRawZipcode'
import { getInputLabel } from '../../helpers/getInputLabel'

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

interface CleaveInputProps extends Props {
  inputRef: (ref: HTMLInputElement | null) => void
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
  setFieldValue,
  ...rest
}: IProps) => {
  const zipcodeDelimiters = ['.', '-']
  const cleaveOptions: CleaveOptions = {
    delimiters: zipcodeDelimiters,
    blocks: [2, 3, 3],
    numericOnly: true
  }

  return (
    <FormControl fullWidth error={isInvalid}>
      <InputLabel htmlFor={inputIdentifier}>{getInputLabel(inputLabel, isRequired)}</InputLabel>

      <OutlinedInput
        {...rest}
        id={inputIdentifier}
        name={inputIdentifier}
        label={getInputLabel(inputLabel, isRequired)}
        type='text'
        onBlur={onBlur}
        onChange={async e => {
          const { value: maskedValue } = e.target
          const unmaskedValue = extractZipcode(maskedValue)

          const event = {
            target: {
              name: inputIdentifier,
              value: unmaskedValue
            }
          }

          onChange(event as ChangeEvent<HTMLInputElement>)

          if (unmaskedValue?.length === 8) {
            try {
              const res = await fetch(`${VIA_CEP_ENDPOINT}/${unmaskedValue}/json`)
              const viaCepAddress: ViaCepAddress = await res.json()

              setFieldValue('city', {
                cityId: viaCepAddress?.ibge,
                cityName: viaCepAddress?.localidade
              })
              setFieldValue('neighborhood', viaCepAddress?.bairro)
              setFieldValue('street', viaCepAddress?.logradouro)
            } catch (err) {
              // console.log(err)
            }
          }
        }}
        inputComponent={CleaveInput as any}
        inputProps={{
          options: cleaveOptions,
          'data-testid': rest.name
        }}
      />
      {isInvalid && errorMessage && <FormFeedback errorMessage={errorMessage} />}
    </FormControl>
  )
}

export default ZipcodeInput
