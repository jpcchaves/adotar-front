import { forwardRef } from 'react'
import { IMaskInput } from 'react-imask'

interface IProps {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}

const ZipcodeMask = forwardRef<HTMLInputElement, IProps>(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props

  return (
    <IMaskInput
      {...other}
      mask='##.###-###'
      definitions={{
        '#': /[0-9]/
      }}
      inputRef={ref}
      onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  )
})

export default ZipcodeMask
