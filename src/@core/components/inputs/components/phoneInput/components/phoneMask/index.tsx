import { forwardRef } from 'react'

import { IMaskInput } from 'react-imask'

interface IProps {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
  value: string
}

const PhoneMask = forwardRef<HTMLInputElement, IProps>(function PhoneMaskCustom(props, ref) {
  const { onChange, ...other } = props

  const getNumericChars = (value: string) => value.replace(/\D/g, '')

  return (
    <IMaskInput
      {...other}
      mask={['(00) 0000-0000', '(00) 00000-0000']}
      definitions={{
        '0': /[0-9]/
      }}
      inputRef={ref}
      onAccept={(value: any) => {
        onChange({ target: { name: props.name, value: getNumericChars(value) } })
      }}
      overwrite
    />
  )
})

export default PhoneMask
