// ** MUI Components
import { Grid } from '@mui/material'

// Custom Components
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import PetDetailsAbout from '../../components/petDetailsAbout'
import PetDetailsHeader from '../../components/petDetailsHeader'
import usePetDetails from '../../hooks/usePetDetails'

const PetDetails = () => {
  const {
    query: { petId }
  } = useRouter()

  const { getPetDetailedInfo, generatePetCardPdf } = usePetDetails()

  useEffect(() => {
    getPetDetailedInfo(String(petId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <PetDetailsHeader generatePetCardPdf={generatePetCardPdf} />
      </Grid>
      <Grid item xs={12}>
        <PetDetailsAbout />
      </Grid>
    </Grid>
  )
}

export default PetDetails
