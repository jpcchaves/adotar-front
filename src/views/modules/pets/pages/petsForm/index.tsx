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
import { PictureModel } from 'src/@core/components/inputs/models/picture/PictureModel'
import StepperWrapper from 'src/@core/styles/mui/stepper'
import { PetCreateDTO } from 'src/domain/DTO/pet/PetCreateDTO'
import renderContent from '../../components/getStepContent'
import { getFormInitialValues } from '../../data/formInitialValues'
import { steps } from '../../data/formSteps'
import usePets from '../../hooks/usePets'
import useStepper from '../../hooks/useStepper'
import { isActiveStepEqualsToIndex, shouldSetFormError } from '../../utils/shouldSetFormError'
import { petFormValidationSchema } from '../../utils/validation/petFormValidationSchema'

const PetsForm = () => {
  const { activeStep, handleNext, handleBack } = useStepper(0)
  const { createPet } = usePets()

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: getFormInitialValues(),
    validationSchema: petFormValidationSchema[activeStep],
    onSubmit: (values, { setErrors, setTouched }) => {
      const isLastStep = !!(activeStep === steps.length - 1)

      if (!isLastStep) handleNext()

      setErrors({})
      setTouched({})

      const petPicturesToSubmit = (values.petPictures || []).map((p: PictureModel) => ({
        imgUrl: p.imgUrl
      }))

      const valuesToSubmit: PetCreateDTO = {
        ...values,
        typeId: values.typeId.value,
        size: values.size.value,
        monthsAge: values.monthsAge.value,
        yearsAge: values.yearsAge.value,
        healthCondition: values.healthCondition.value,
        gender: values.gender.value,
        cityIbge: values.city.value,
        state: values.state.value,
        breedId: values.breedId.value,
        petPictures: petPicturesToSubmit
      }

      if (isLastStep) {
        createPet(valuesToSubmit)
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
          {renderContent(activeStep, handleBack, validation)}
        </form>
      </CardContent>
    </Card>
  )
}

export default PetsForm
