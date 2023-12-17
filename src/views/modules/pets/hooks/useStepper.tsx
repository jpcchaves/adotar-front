import React from 'react'

const useStepper = (initialStep: number) => {
  const [activeStep, setActiveStep] = React.useState<number>(initialStep)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return {
    activeStep,
    handleNext,
    handleBack
  }
}

export default useStepper
