import { Box, Button, CardContent, Grid } from '@mui/material'
import { FormikValues } from 'formik'
import { PasswordInput } from 'src/@core/components/inputs'
import useDisableSubmitButton from 'src/hooks/useDisableSubmitButton/useDisableSubmitButton'

interface IProps {
  validation: FormikValues
}

const SecondsTabContent = ({ validation }: IProps) => {
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
            <PasswordInput
              isInvalid={!!(validation.errors.currentPassword && validation.touched.currentPassword)}
              errorMessage={validation.errors.currentPassword}
              inputIdentifier='currentPassword'
              inputLabel='Senha atual'
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.currentPassword}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PasswordInput
              isInvalid={!!(validation.errors.newPassword && validation.touched.newPassword)}
              errorMessage={validation.errors.newPassword}
              inputIdentifier='newPassword'
              inputLabel='Nova senha'
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.newPassword}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PasswordInput
              isInvalid={!!(validation.errors.confirmNewPassword && validation.touched.confirmNewPassword)}
              errorMessage={validation.errors.confirmNewPassword}
              inputIdentifier='confirmNewPassword'
              inputLabel='Confirme a nova senha'
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              value={validation.values.confirmNewPassword}
            />
          </Grid>

          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
            <Button
              type='button'
              onClick={() => validation.resetForm()}
              variant='outlined'
              color='secondary'
              sx={{ mr: 3 }}
            >
              Resetar
            </Button>

            <Box>
              <Button type='reset' variant='outlined' color='secondary' sx={{ mr: 3 }}>
                Cancelar
              </Button>

              <Button variant='contained' disabled={isSubmitButtonDisabled}>
                Salvar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </form>
  )
}

export default SecondsTabContent
