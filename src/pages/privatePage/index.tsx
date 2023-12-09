// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const PrivatePage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Private Page 🔒'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>this is a private page and only admin can access it</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

PrivatePage.acl = {
  action: 'manage',
  subject: 'privatePage'
}

export default PrivatePage
