import { FormikErrors, FormikValues } from 'formik'
import { ChangeEvent, useMemo } from 'react'
import { extractZipcode } from 'src/utils/common/zipcode/extractRawZipcode'
import { useGetStatesData } from 'src/views/modules/pets/data/geolocation/states'

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

interface IProps {
  inputIdentifier: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<FormikValues>>
  value: string
}

const useHandleZipcodeChange = ({ inputIdentifier, onChange, setFieldValue, value }: IProps) => {
  const VIA_CEP_ENDPOINT = process.env.NEXT_PUBLIC_VIA_CEP_ENDPOINT
  const ZIPCODE_MAX_LENGTH = 8

  const states = useGetStatesData()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialValue = useMemo(() => value, [])
  const initialValueHasChanged = !!(initialValue !== value)

  const handleZipcodeChange = async (e: ChangeEvent<HTMLInputElement>) => {
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

    if (!initialValueHasChanged) return

    if (unmaskedValue?.length === ZIPCODE_MAX_LENGTH) {
      try {
        const res = await fetch(`${VIA_CEP_ENDPOINT}/${unmaskedValue}/json`)

        if (res.ok) {
          const viaCepAddress: ViaCepAddress = await res.json()

          const state = states.find(state => state.uf === viaCepAddress.uf)

          if (state) {
            setFieldValue('state', { value: state.value, label: state.label })
          }

          setFieldValue('city', { value: viaCepAddress.ibge, label: viaCepAddress.localidade })

          setFieldValue('neighborhood', viaCepAddress.bairro || '')

          setFieldValue('street', viaCepAddress.logradouro || '')
        }
      } catch (err) {
        // console.log(err)
      }
    }
  }

  return { handleZipcodeChange }
}

export default useHandleZipcodeChange
