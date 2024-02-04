import { Icon } from '@iconify/react'
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

interface FileUploadProps {
  onFileUpload: (file: File) => void
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileUpload(acceptedFiles[0])
        setSelectedFile(acceptedFiles[0])
        setDialogOpen(false)
      }
    },
    [onFileUpload]
  )

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['jpg', 'jpeg', 'png']
    },
    onDrop
  })

  const handleDialogOpen = () => {
    setDialogOpen(true)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
  }

  return (
    <>
      <div onClick={handleDialogOpen} style={{ cursor: 'pointer' }}>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleDialogOpen}
          style={{
            position: 'relative',
            cursor: 'pointer'
          }}
        >
          <Avatar
            alt='Profile image'
            sizes=''
            src={selectedFile ? URL.createObjectURL(selectedFile) : ''}
            variant='rounded'
            sx={{ width: 120, height: 120 }}
          />

          {isHovered && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '8px',
                opacity: isHovered ? 1 : 0
              }}
            >
              <Icon icon='mdi:pencil' />
            </div>
          )}
        </div>
      </div>

      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Editar Foto</DialogTitle>
        <DialogContent>
          <Typography variant='body1'>Clique ou arraste uma imagem para fazer upload</Typography>

          <div
            {...getRootProps()}
            style={{ marginTop: '20px', padding: '20px', border: '1px dashed #ccc', cursor: 'pointer' }}
          >
            <input {...getInputProps()} />
            <Typography variant='body2' color='textSecondary'>
              Arraste e solte uma imagem aqui ou clique para selecionar
            </Typography>
          </div>
          <Typography mt={2} variant='body2' color='textSecondary'>
            Tipos de arquivo permitidos: JPG, JPEG, PNG.
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            Tamanho máximo do arquivo: 200KB.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color='primary'>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default FileUpload
