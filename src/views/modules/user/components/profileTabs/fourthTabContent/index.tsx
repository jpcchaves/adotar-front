import { Button, CardContent, Grid } from '@mui/material'
import { FormikValues } from 'formik'
import PhoneInput from 'src/@core/components/inputs/components/phoneInput'
import useDisableSubmitButton from 'src/hooks/useDisableSubmitButton/useDisableSubmitButton'

interface IProps {
  validation: FormikValues
}

const FourthTabContent = ({ validation }: IProps) => {
  const { isSubmitButtonDisabled } = useDisableSubmitButton({ validation })

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        validation.handleSubmit(e)
      }}
    >
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <PhoneInput
              inputIdentifier='phone1'
              inputLabel='Primeiro Telefone'
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.phone1}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PhoneInput
              inputIdentifier='phone2'
              inputLabel='Segundo Telefone'
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.phone2}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PhoneInput
              inputIdentifier='phone3'
              inputLabel='Terceiro Telefone'
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.phone3}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end', mt: 5 }}>
            <Button type='reset' variant='outlined' color='secondary' sx={{ mr: 3 }}>
              Cancelar
            </Button>

            <Button variant='contained' type='submit' disabled={isSubmitButtonDisabled}>
              Salvar
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </form>
  )
}

export default FourthTabContent
