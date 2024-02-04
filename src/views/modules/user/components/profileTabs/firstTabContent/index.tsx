import { Button, CardContent, Grid, TextField } from '@mui/material'
import { FormikValues } from 'formik'
import { TextInput } from 'src/@core/components/inputs'
import useDisableSubmitButton from 'src/hooks/useDisableSubmitButton/useDisableSubmitButton'

interface IProps {
  validation: FormikValues
}

const FirstTabContent = ({ validation }: IProps) => {
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
            <TextInput
              inputIdentifier='firstName'
              inputLabel='Nome'
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextInput
              inputIdentifier='lastName'
              inputLabel='Sobremome'
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField disabled fullWidth type='email' label='Email' value={validation.values.email} />
          </Grid>

          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end', mt: 5 }}>
            <Button type='reset' variant='outlined' color='secondary' sx={{ mr: 3 }}>
              Cancelar
            </Button>

            <Button variant='contained' disabled={isSubmitButtonDisabled}>
              Salvar
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </form>
  )
}

export default FirstTabContent
