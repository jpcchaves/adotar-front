// ** MUI Imports
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import { Icon } from '@iconify/react'
import { useFormik } from 'formik'
import { useState } from 'react'
import { SyntheticEvent } from 'react-draft-wysiwyg'
import { TextInput } from 'src/@core/components/inputs'
import FileUpload from '../profilePictureInput'

const ProfileDetails = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setActiveTabIndex(() => newValue)
  }

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: values => {
      console.log(values)
    }
  })

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
              <Tab value='1' label='Dados Básicos' icon={<Icon icon='mdi:account' />} />
              <Tab value='2' label='Atualizar Senha' icon={<Icon icon='mdi:password' />} />
              <Tab value='3' label='Endereço' icon={<Icon icon='mdi:house' />} />
              <Tab value='4' label='Contato' icon={<Icon icon='mdi:phone' />} />
            </TabList>
            <TabPanel value='1'>
              <form>
                <CardContent>
                  <Grid container spacing={6}>
                    <Grid item xs={12} sm={6}>
                      <TextInput
                        inputIdentifier='firstName'
                        inputLabel='Nome'
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.firstName}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextInput
                        inputIdentifier='lastName'
                        inputLabel='Sobremome'
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.lastName}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField disabled fullWidth type='email' label='Email' value={validation.values.email} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label='Organization' placeholder='ThemeSelection' />
                    </Grid>

                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end', mt: 5 }}>
                      <Button type='reset' variant='outlined' color='secondary' sx={{ mr: 3 }}>
                        Cancelar
                      </Button>

                      <Button variant='contained'>Salvar</Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </form>
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
