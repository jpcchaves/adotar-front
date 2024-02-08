// ** MUI Imports
import { Icon } from '@iconify/react'
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
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { profileTabsData } from '../../data/profileTabsData'
import useHandleTabChange from '../../hooks/useHandleTabChange'
import useUserDetails from '../../hooks/useUserDetails'
import { ProfileTabs } from '../../models/enum/ProfileTabs'
import { addressValidationSchema } from '../../utils/validation/addressValidationSchema'
import { updatePasswordValidation } from '../../utils/validation/updatePasswordValidation'
import { updateUserBasicInfoValidation } from '../../utils/validation/updateUserBasicInfo'
import FileUpload from '../profilePictureInput'
import FirstTabContent from '../profileTabs/firstTabContent'
import FourthTabContent from '../profileTabs/fourthTabContent'
import SecondsTabContent from '../profileTabs/secondTabContent'
import ThirdTabContent from '../profileTabs/thirdTabContent'

const ProfileDetails = () => {
  const { activeTabIndex, handleChange } = useHandleTabChange()

  const handleFileChange = (file: File) => {
    console.log('Uploaded file:', file)
  }

  const firstTabValidation = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    validationSchema: updateUserBasicInfoValidation,
    onSubmit: values => {
      console.log(values)
    }
  })

  const secondTabValidation = useFormik({
    enableReinitialize: true,
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    },
    validationSchema: updatePasswordValidation,
    onSubmit: values => {
      updateUserPassword(values)
    }
  })

  const thirdTabValidation = useFormik({
    enableReinitialize: false,
    initialValues: {
      zipcode: '',
      state: { value: '', label: '' },
      city: { value: '', label: '' },
      neighborhood: '',
      street: '',
      number: '',
      complement: ''
    },
    validationSchema: addressValidationSchema,
    onSubmit: values => console.log(values)
  })

  const fourthTabValidation = useFormik({
    enableReinitialize: true,
    initialValues: {
      phone1: '',
      phone2: '',
      phone3: ''
    },
    onSubmit: values => console.log(values)
  })

  const { updateUserPassword, getUserAddress } = useUserDetails({
    secondTabValidation,
    thirdTabValidation
  })

  useEffect(() => {
    getUserAddress()
  }, [])

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
              <FirstTabContent validation={firstTabValidation} />
            </TabPanel>
            <TabPanel value='2'>
              <SecondsTabContent validation={secondTabValidation} />
            </TabPanel>
            <TabPanel value='3'>
              <ThirdTabContent validation={thirdTabValidation} getUserAddress={getUserAddress} />
            </TabPanel>
            <TabPanel value='4'>
              <FourthTabContent validation={fourthTabValidation} />
            </TabPanel>
          </TabContext>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ProfileDetails
