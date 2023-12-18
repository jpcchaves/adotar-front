import { Typography } from '@mui/material'
import { FormikValues } from 'formik'
import { Fragment } from 'react'
import { steps } from '../../data/formSteps'
import { FifthStep, FirstStep, FourthStep, SecondStep, ThirdStep } from '../formSteps'

const getStepContent = (activeStep: number, handleBack: () => void, validation: FormikValues) => {
  switch (activeStep) {
    case 0:
      return (
        <>
          {/*
              tipo, nome, sexo, tamanho, estado de saude
              */}
          <FirstStep activeStep={activeStep} validation={validation} />
        </>
      )
    case 1:
      return (
        <>
          <SecondStep />
          {/*
                  raca, cor, idade (ano e meses), descricao do pet, caracteristicas
                */}
        </>
      )
    case 2:
      return (
        <>
          {/* fotos */}
          <ThirdStep />
        </>
      )
    case 3:
      return (
        <>
          <FourthStep />
        </>
      )
    case 4:
      return (
        <>
          <FifthStep />
        </>
      )
    default:
      return null
  }
}

const renderContent = (activeStep: number, handleBack: () => void, validation: FormikValues) => {
  if (activeStep === steps.length) {
    return (
      <Fragment>
        <Typography>All steps are completed!</Typography>
      </Fragment>
    )
  } else {
    return getStepContent(activeStep, handleBack, validation)
  }
}

export default renderContent
