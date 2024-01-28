// ** MUI Components
import { Grid } from '@mui/material'

// Custom Components
import PetDetailsHeader from '../../components/petDetailsHeader'

const PetDetails = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <PetDetailsHeader />
      </Grid>
    </Grid>
  )
}

export default PetDetails
