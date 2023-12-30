// ** Third Party Components
import { Grid } from '@mui/material'
import { FormikValues } from 'formik'
import InputFile from 'src/@core/components/inputs/components/inputFile'
import FormStepHeader from '../../../formStepHeader'
import FormStepControls from '../../../formStepsControls'

interface IProps {
  activeStep: number
  validation: FormikValues
  handleBack: () => void
}

const FourthStep = ({ activeStep, validation, handleBack }: IProps) => {
  return (
    <>
      <Grid container spacing={5} mb={5}>
        <Grid item xs={12}>
          <FormStepHeader activeStep={activeStep} />
        </Grid>
      </Grid>

      <InputFile />

      <Grid container spacing={5} mt={5}>
        <FormStepControls activeStep={activeStep} handleBack={handleBack} />
      </Grid>
    </>
  )
}

export default FourthStep
