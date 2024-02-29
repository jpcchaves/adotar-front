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
import { AddressRequestDTO } from 'src/domain/DTO/address/AddressRequestDTO'
import { UpdateUserNameDTO } from 'src/domain/DTO/userDetails/UpdateUserNameDTO'
import { useAppSelector } from 'src/hooks/useRedux'
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
  const { userDetails } = useAppSelector(state => state.userDetails)
  const { activeTabIndex, handleChange } = useHandleTabChange()

  const handleFileChange = (file: File) => {
    console.log('Uploaded file:', file)
  }

  const firstTabValidation = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: userDetails ? userDetails?.firstName : '',
      lastName: userDetails ? userDetails?.lastName : '',
      email: userDetails ? userDetails?.email : ''
    },
    validationSchema: updateUserBasicInfoValidation,
    onSubmit: values => {
      const valuesToSubmit: UpdateUserNameDTO = {
        firstName: values.firstName,
        lastName: values.lastName
      }

      updateUserName(valuesToSubmit)
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
    enableReinitialize: true,
    initialValues: {
      zipcode: userDetails?.address ? userDetails.address.zipcode : '',
      state: {
        value: userDetails?.address ? userDetails?.address?.state : '',
        label: userDetails?.address ? userDetails?.address?.stateName : ''
      },
      city: {
        value: userDetails?.address ? userDetails?.address?.city : '',
        label: userDetails?.address ? userDetails?.address?.cityName : ''
      },
      neighborhood: userDetails?.address ? userDetails?.address?.neighborhood : '',
      street: userDetails?.address ? userDetails?.address?.street : '',
      number: userDetails?.address ? userDetails?.address?.number : '',
      complement: userDetails?.address ? userDetails?.address?.complement : ''
    },
    validationSchema: addressValidationSchema,
    onSubmit: values => {
      const valuesToSubmit: AddressRequestDTO = {
        zipcode: values.zipcode!,
        street: values.street!,
        number: values.number!,
        complement: values.complement!,
        neighborhood: values.neighborhood!,
        cityIbge: values.city.value!
      }

      if (userDetails?.address) {
        if (thirdTabFormHasChanged) {
          updateUserAddress(valuesToSubmit)
        }
      } else {
        createUserAddress(valuesToSubmit)
      }
    }
  })

  const thirdTabFormHasChanged = thirdTabValidation.dirty

  const fourthTabValidation = useFormik({
    enableReinitialize: true,
    initialValues: {
      phone1: userDetails ? userDetails?.contact?.phone1 : '',
      phone2: userDetails ? userDetails?.contact?.phone2 : '',
      phone3: userDetails ? userDetails?.contact?.phone3 : ''
    },
    onSubmit: values => {
      if (userDetails?.contact) {
        if (fourthTabFormHasChanged) {
          updateUserContact(values)
        }
      } else {
        createUserContact(values)
      }
    }
  })

  const fourthTabFormHasChanged = fourthTabValidation.dirty

  const {
    updateUserPassword,
    getUserDetails,
    updateUserAddress,
    createUserAddress,
    createUserContact,
    updateUserContact,
    updateUserName
  } = useUserDetails({
    secondTabValidation,
    thirdTabValidation
  })

  useEffect(() => {
    getUserDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <ThirdTabContent validation={thirdTabValidation} />
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
