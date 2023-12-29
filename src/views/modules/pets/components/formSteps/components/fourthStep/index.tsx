// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Components
import { Grid } from '@mui/material'
import { FormikValues } from 'formik'
import { useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'
import DropzoneWrapper from 'src/@core/styles/libs/react-dropzone'
import { steps } from 'src/views/modules/pets/data/formSteps'
import { v4 as uuidv4 } from 'uuid'
import FormStepControls from '../../../formStepsControls'

// Styled component for the upload image inside the dropzone area
const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    marginRight: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4)
  },
  [theme.breakpoints.down('sm')]: {
    width: 250
  },
  userSelect: 'none'
}))

// Styled component for the heading inside the dropzone area
const HeadingTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(4)
  }
}))

interface IProps {
  activeStep: number
  validation: FormikValues
  handleBack: () => void
}

const FourthStep = ({ activeStep, validation, handleBack }: IProps) => {
  // ** State
  const [files, setFiles] = useState<{ file: File; id: string }[]>([])

  // ** Hooks
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 2,
    maxSize: 2000000,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    onDrop: (acceptedFiles: File[]) => {
      const filesWithId = acceptedFiles.map((file: File) => ({
        file,
        id: uuidv4()
      }))
      setFiles(prevFiles => [...prevFiles, ...filesWithId])
    },
    onDropRejected: () => {
      toast.error('You can only upload 2 files & maximum size of 2 MB.', {
        duration: 2000
      })
    }
  })

  const renderFilePreview = (file: File) => {
    if (file.type.startsWith('image')) {
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file as any)} />
    } else {
      return <Icon icon='mdi:file-document-outline' />
    }
  }

  const onDelete = (fileId: string) => {
    setFiles(prevFiles => prevFiles.filter(file => file.id !== fileId))
  }

  const fileList = files.map((fileData: { file: File; id: string }, idx) => (
    <ListItem key={`${fileData.id}-${idx}`}>
      <div className='file-details'>
        <div className='file-preview'>{renderFilePreview(fileData.file)}</div>
        <div>
          <Typography className='file-name'>{fileData.file.name}</Typography>
          <Typography className='file-size' variant='body2'>
            {Math.round(fileData.file.size / 100) / 10 > 1000
              ? `${(Math.round(fileData.file.size / 100) / 10000).toFixed(1)} mb`
              : `${(Math.round(fileData.file.size / 100) / 10).toFixed(1)} kb`}
          </Typography>
        </div>
      </div>
      <IconButton onClick={() => onDelete(fileData.id)}>
        <Icon icon='mdi:close' fontSize={20} />
      </IconButton>
    </ListItem>
  ))

  const handleRemoveAllFiles = () => {
    setFiles([])
  }

  return (
    <>
      <Grid container spacing={5} mb={5}>
        <Grid item xs={12}>
          <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
            {steps[activeStep].title}
          </Typography>
          <Typography variant='caption' component='p'>
            {steps[activeStep].subtitle}
          </Typography>
        </Grid>
      </Grid>
      <DropzoneWrapper>
        <Box {...getRootProps({ className: 'dropzone' })}>
          <input id='pet-dropzone' {...getInputProps()} />
          <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center' }}>
            <Img width={300} alt='Upload img' src='/images/misc/upload.png' draggable={false} />
            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: ['center', 'center', 'inherit'] }}>
              <HeadingTypography variant='h5'>Arraste ou clique para adicionar arquivos</HeadingTypography>
              <Typography color='textSecondary'>Formatos permitidos *.jpeg, *.jpg, *.png</Typography>
              <Typography color='textSecondary'>Limite de 5 MB ou 5 arquivos</Typography>
            </Box>
          </Box>
        </Box>
        {files.length ? (
          <>
            <List>{fileList}</List>
            <div className='buttons'>
              <Button sx={{ marginRight: '5px' }} color='error' variant='outlined' onClick={handleRemoveAllFiles}>
                Remover Todas
              </Button>
            </div>
          </>
        ) : null}
      </DropzoneWrapper>
      <Grid container spacing={5} mt={5}>
        <FormStepControls activeStep={activeStep} handleBack={handleBack} />
      </Grid>
    </>
  )
}

export default FourthStep
