import { Typography } from '@mui/material'
import { steps } from '../../data/formSteps'

interface IProps {
  activeStep: number
}

const FormStepHeader = ({ activeStep }: IProps) => {
  return (
    <>
      <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
        {steps[activeStep].title}
      </Typography>
      <Typography variant='caption' component='p'>
        {steps[activeStep].subtitle}
      </Typography>
    </>
  )
}

export default FormStepHeader
