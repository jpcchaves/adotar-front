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
import { useFormik } from 'formik'
import StepperWrapper from 'src/@core/styles/mui/stepper'
import { PetRequestDTO } from 'src/domain/DTO/pet/PetRequestDTO'
import { useAppSelector } from 'src/hooks/useRedux'
import FormStepControls from '../../components/formStepsControls'
import renderContent from '../../components/getStepContent'
import { getFormInitialValues } from '../../data/formInitialValues'
import { steps } from '../../data/formSteps'
import usePets from '../../hooks/usePets'
import useStepper from '../../hooks/useStepper'
import { prepareValuesToSubmit } from '../../utils/prepareValuesToSubmit'
import { isActiveStepEqualsToIndex, shouldSetFormError } from '../../utils/shouldSetFormError'
import { petFormValidationSchema } from '../../utils/validation/petFormValidationSchema'

const PetsForm = () => {
  const { activeStep, handleNext, handleBack } = useStepper(0)
  const { createPet, updatePet, isLoading } = usePets()
  const { petDetails } = useAppSelector(state => state.pets)

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: getFormInitialValues(petDetails!),
    validationSchema: petFormValidationSchema[activeStep],
    onSubmit: (values, { setErrors, setTouched }) => {
      const isLastStep = !!(activeStep === steps.length - 1)

      if (!isLastStep) handleNext()

      setErrors({})
      setTouched({})

      const valuesToSubmit: PetRequestDTO = prepareValuesToSubmit(values)

      if (isLastStep) {
        if (petDetails?.id) {
          updatePet(String(petDetails.id), valuesToSubmit)
        } else {
          createPet(valuesToSubmit)
        }
      }
    }
  })

  return (
    <Card>
      <CardContent>
        <StepperWrapper>
          <Stepper activeStep={activeStep}>
            {steps.map((step, index) => {
              const labelProps: {
                error?: boolean
              } = {}

              if (isActiveStepEqualsToIndex(activeStep, index)) {
                shouldSetFormError(validation, activeStep, index, labelProps)
              }

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

      <CardContent>
        <form
          onSubmit={e => {
            e.preventDefault()
            validation.handleSubmit(e)
          }}
        >
          {renderContent(activeStep, validation)}
          <FormStepControls activeStep={activeStep} handleBack={handleBack} isLoading={isLoading} />
        </form>
      </CardContent>
    </Card>
  )
}

export default PetsForm
