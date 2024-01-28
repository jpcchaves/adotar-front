import { Box } from '@mui/material'
import Lottie from 'lottie-react'
import trashcamAnimation from '../animation/trashcam-animation.json'

const TrashcamAnimation = () => {
  return (
    <Box display='flex' justifyContent='center'>
      <Lottie style={{ width: '200px' }} animationData={trashcamAnimation} loop={true} />
    </Box>
  )
}

export default TrashcamAnimation
