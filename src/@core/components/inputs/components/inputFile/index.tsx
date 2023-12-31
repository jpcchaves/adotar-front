// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Components
import { Typography } from '@mui/material'
import { useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'
import DropzoneWrapper from 'src/@core/styles/libs/react-dropzone'
import { v4 as uuidv4 } from 'uuid'
import { HeadingTypography, Img } from './style'

const InputFile = () => {
  // ** State
  const [files, setFiles] = useState<{ file: File; id: string; imgUrl: string }[]>([])

  // ** Hooks
  const { getRootProps, getInputProps } = useDropzone({
    maxSize: 2000000,
    multiple: true,
    maxFiles: 5,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    onDrop: async (acceptedFiles: File[]) => {
      const filesWithId = acceptedFiles.map((file: File) => ({
        file,
        id: uuidv4(),
        imgUrl: ''
      }))

      await Promise.all(
        filesWithId.map(async fileData => {
          const imgUrl = await readFileAsDataURL(fileData.file)
          fileData.imgUrl = imgUrl
        })
      )

      setFiles(prevFiles => [...prevFiles, ...filesWithId])
    },
    onDropRejected: () => {
      toast.error('You can only upload 2 files & maximum size of 2 MB.', {
        duration: 2000
      })
    }
  })

  const renderFilePreview = (fileData: { file: File; id: string; imgUrl: string }) => {
    if (fileData.file.type.startsWith('image')) {
      return <img width={38} height={38} alt={fileData.file.name} src={fileData.imgUrl} />
    } else {
      return <Icon icon='mdi:file-document-outline' />
    }
  }

  const onDelete = (fileId: string) => {
    setFiles(prevFiles => prevFiles.filter(file => file.id !== fileId))
  }

  const fileList = files.map((fileData: { file: File; id: string; imgUrl: string }, idx) => {
    return (
      <ListItem key={`${fileData.id}-${idx}`}>
        <div className='file-details'>
          <div className='file-preview'>{renderFilePreview(fileData)}</div>
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
    )
  })

  const handleRemoveAllFiles = () => {
    setFiles([])
  }

  const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  return (
    <DropzoneWrapper>
      <Box {...getRootProps({ className: 'dropzone' })}>
        <input id='pet-dropzone' {...getInputProps()} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', 'column', 'row'],
            alignItems: 'center'
          }}
        >
          <Img width={300} alt='Upload img' src='/images/misc/upload.png' draggable={false} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: ['center', 'center', 'inherit']
            }}
          >
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
  )
}

export default InputFile
