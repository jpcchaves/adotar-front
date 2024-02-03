import { Button, CardContent, Grid, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { TextInput } from 'src/@core/components/inputs'

const FirstTabContent = () => {
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: values => {
      console.log(values)
    }
  })

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

            <Button variant='contained'>Salvar</Button>
          </Grid>
        </Grid>
      </CardContent>
    </form>
  )
}

export default FirstTabContent
