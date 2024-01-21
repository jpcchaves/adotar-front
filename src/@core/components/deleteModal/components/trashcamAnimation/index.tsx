import React from 'react'
import Lottie from 'lottie-react'
import trashcamAnimation from 'public/images/animation/trashcam-animation.json'
import { Box } from '@mui/material'

const TrashcamAnimation = () => {
  return (
    <Box display='flex' justifyContent='center'>
      <Lottie style={{ width: '200px' }} animationData={trashcamAnimation} loop={true} />
    </Box>
  )
}

export default TrashcamAnimation
