// ** React Imports

// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import FormWizardStepper from '../../components/formWizardStepper'

// ** Styled Components
import StepperWrapper from 'src/@core/styles/mui/stepper'
import FormStep1 from '../../components/formSteps/step1'
import useStepper from '../../hooks/useStepper'

const steps = [
  {
    title: 'Dados',
    subtitle: 'Dados do Pet'
  },
  {
    title: 'Detalhes',
    subtitle: 'Detalhes do Pet'
  },
  {
    title: 'Dados Basicos 3',
    subtitle: 'Dados Basicos 3'
  }
]

const PetsForm = () => {
  const { activeStep, handleNext, handleBack } = useStepper(0)

  const renderForm = (activeStep: number) => {
    switch (activeStep) {
      case 0:
        return (
          <>
            {/*
          tipo, nome, sexo, tamanho, estado de saude
          */}
            <FormStep1 />
            <button onClick={handleNext}>Proximo</button>
          </>
        )
      case 1:
        return (
          <>
            <>step two</>
            {/*
              raca, cor, idade (ano e meses), descricao do pet, caracteristicas
            */}
            <button onClick={handleBack}>Anterior</button>
            <button onClick={handleNext}>Proximo</button>
          </>
        )
      case 2:
        return (
          <>
            {/* fotos */}
            <>step three</>
            <button onClick={handleNext}>Next</button>
          </>
        )
      default:
        return <>Submitted!!</>
    }
  }

  // const renderContent = () => {
  //   if (activeStep === steps.length) {
  //     return (
  //       <Fragment>
  //         <Typography>All steps are completed!</Typography>
  //         <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
  //           <Button size='large' variant='contained' onClick={handleReset}>
  //             Reset
  //           </Button>
  //         </Box>
  //       </Fragment>
  //     )
  //   } else {
  //     return getStepContent(activeStep)
  //   }
  // }

  return (
    <Card>
      <CardContent>
        <StepperWrapper>
          <Stepper activeStep={activeStep}>
            {steps.map((step, index) => {
              const labelProps: {
                error?: boolean
              } = {}

              // if (index === activeStep) {
              //   labelProps.error = false
              //   if (
              //     (accountErrors.email ||
              //       accountErrors.username ||
              //       accountErrors.password ||
              //       accountErrors['confirm-password']) &&
              //     activeStep === 0
              //   ) {
              //     labelProps.error = true
              //   } else if (
              //     (personalErrors.country ||
              //       personalErrors.language ||
              //       personalErrors['last-name'] ||
              //       personalErrors['first-name']) &&
              //     activeStep === 1
              //   ) {
              //     labelProps.error = true
              //   } else if (
              //     (socialErrors.google || socialErrors.twitter || socialErrors.facebook || socialErrors.linkedIn) &&
              //     activeStep === 2
              //   ) {
              //     labelProps.error = true
              //   } else {
              //     labelProps.error = false
              //   }
              // }

              return (
                <Step key={index}>
                  <StepLabel {...labelProps} StepIconComponent={FormWizardStepper}>
                    <div className='step-label'>
                      <Typography className='step-number'>{`0${index + 1}`}</Typography>
                      <div>
                        <Typography className='step-title'>{step.title}</Typography>
                        <Typography className='step-subtitle'>{step.subtitle}</Typography>
                      </div>
                    </div>
                  </StepLabel>
                </Step>
              )
            })}
          </Stepper>
        </StepperWrapper>
      </CardContent>

      <Divider sx={{ m: '0 !important' }} />

      <CardContent>{renderForm(activeStep)}</CardContent>
    </Card>
  )
}

export default PetsForm
