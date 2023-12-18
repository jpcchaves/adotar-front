import { Typography } from '@mui/material'
import { Fragment } from 'react'
import { steps } from '../../data/formSteps'
import { FifthStep, FirstStep, FourthStep, SecondStep, ThirdStep } from '../formSteps'

const getStepContent = (activeStep: number, handleBack: () => void) => {
  switch (activeStep) {
    case 0:
      return (
        <>
          {/*
              tipo, nome, sexo, tamanho, estado de saude
              */}
          <FirstStep />
          <button type='submit'>Proximo</button>
        </>
      )
    case 1:
      return (
        <>
          <SecondStep />
          {/*
                  raca, cor, idade (ano e meses), descricao do pet, caracteristicas
                */}
          <button onClick={handleBack}>anterior</button>
          <button type='submit'>Proximo</button>
        </>
      )
    case 2:
      return (
        <>
          {/* fotos */}
          <ThirdStep />
          <button onClick={handleBack}>anterior</button>
          <button type='submit'>Submit</button>
        </>
      )
    case 3:
      return (
        <>
          <FourthStep />
          <button onClick={handleBack}>anterior</button>
          <button type='submit'>Submit</button>
        </>
      )
    case 4:
      return (
        <>
          <FifthStep />
          <button onClick={handleBack}>anterior</button>
          <button type='submit'>Submit</button>
        </>
      )
    default:
      return null
  }
}

const renderContent = (activeStep: number, handleBack: () => void) => {
  if (activeStep === steps.length) {
    return (
      <Fragment>
        <Typography>All steps are completed!</Typography>
      </Fragment>
    )
  } else {
    return getStepContent(activeStep, handleBack)
  }
}

export default renderContent
