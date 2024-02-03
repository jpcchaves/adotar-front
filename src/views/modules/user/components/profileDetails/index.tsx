// ** MUI Imports
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import { Icon } from '@iconify/react'
import { profileTabsData } from '../../data/profileTabsData'
import useHandleTabChange from '../../hooks/useHandleTabChange'
import { ProfileTabs } from '../../models/enum/ProfileTabs'
import FileUpload from '../profilePictureInput'
import FirstTabContent from '../profileTabs/firstTabContent'

const ProfileDetails = () => {
  const { activeTabIndex, handleChange } = useHandleTabChange()

  const handleFileChange = (file: File) => {
    console.log('Uploaded file:', file)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Detalhes do Usuário' />
          <CardContent sx={{ pt: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FileUpload onFileUpload={handleFileChange} />
            </Box>
          </CardContent>
          <Divider />

          <TabContext value={activeTabIndex}>
            <TabList onChange={handleChange} variant='fullWidth' aria-label='icon tabs example'>
              {Object.keys(profileTabsData).map(tabValue => {
                const value = tabValue as ProfileTabs
                const tab = profileTabsData[value]

                return (
                  <Tab
                    key={value}
                    value={value}
                    label={tab.label}
                    icon={<Icon fontSize={'1.5rem'} icon={tab.icon} />}
                  />
                )
              })}
            </TabList>
            <TabPanel value='1'>
              <FirstTabContent />
            </TabPanel>
            <TabPanel value='2'>
              <Typography>
                Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa
                chups sesame snaps halvah.
              </Typography>
            </TabPanel>
            <TabPanel value='3'>
              <Typography>
                Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie
                roll carrot cake gummi bears.
              </Typography>
            </TabPanel>
          </TabContext>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ProfileDetails
