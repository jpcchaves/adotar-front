/* eslint-disable @typescript-eslint/no-unused-vars */
// ** Third Party Components
import { Grid } from '@mui/material'
import { FormikValues } from 'formik'
import InputFile from 'src/@core/components/inputs/components/inputFile'
import FormStepHeader from '../../../formStepHeader'

interface IProps {
  activeStep: number
  validation: FormikValues
}

const FourthStep = ({ activeStep, validation }: IProps) => {
  return (
    <>
      <Grid container spacing={5} mb={5}>
        <Grid item xs={12}>
          <FormStepHeader activeStep={activeStep} />
        </Grid>
      </Grid>

      <InputFile
        setFieldValue={validation.setFieldValue}
        isInvalid={!!(validation.errors.petPictures && validation.touched.petPictures)}
        errorMessage={validation.errors.petPictures}
        petPictures={validation.values.petPictures}
        name='petPictures'
        id='petPictures'
      />
    </>
  )
}

export default FourthStep
