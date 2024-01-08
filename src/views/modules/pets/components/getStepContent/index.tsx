import { Typography } from '@mui/material'
import { FormikValues } from 'formik'
import { Fragment } from 'react'
import { steps } from '../../data/formSteps'
import { FifthStep, FirstStep, FourthStep, SecondStep, ThirdStep } from '../formSteps'

const getStepContent = (activeStep: number, validation: FormikValues) => {
  switch (activeStep) {
    case 0:
      return (
        <>
          <FirstStep activeStep={activeStep} validation={validation} />
        </>
      )
    case 1:
      return (
        <>
          <SecondStep activeStep={activeStep} validation={validation} />
        </>
      )
    case 2:
      return (
        <>
          <ThirdStep activeStep={activeStep} validation={validation} />
        </>
      )
    case 3:
      return (
        <>
          <FourthStep activeStep={activeStep} validation={validation} />
        </>
      )
    case 4:
      return (
        <>
          <FifthStep activeStep={activeStep} validation={validation} />
        </>
      )
    default:
      return null
  }
}

const renderContent = (activeStep: number, validation: FormikValues) => {
  if (activeStep === steps.length) {
    return (
      <Fragment>
        <Typography>All steps are completed!</Typography>
      </Fragment>
    )
  } else {
    return getStepContent(activeStep, validation)
  }
}

export default renderContent
