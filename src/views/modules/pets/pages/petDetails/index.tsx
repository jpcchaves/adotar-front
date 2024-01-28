// ** MUI Components
import { Grid } from '@mui/material'

// Custom Components
import PetDetailsAbout from '../../components/petDetailsAbout'
import PetDetailsHeader from '../../components/petDetailsHeader'

const PetDetails = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <PetDetailsHeader />
      </Grid>
      <Grid item xs={12}>
        <PetDetailsAbout />
      </Grid>
    </Grid>
  )
}

export default PetDetails
