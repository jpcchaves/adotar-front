import { Icon } from '@iconify/react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import TrashcamAnimation from './components/trashcamAnimation'

interface IProps {
  isOpen: boolean
  toggleModal: () => void
}

const ModalDelete = ({ isOpen, toggleModal }: IProps) => {
  return (
    <Dialog onClose={toggleModal} aria-labelledby='modal delete' open={isOpen} maxWidth='xs'>
      <DialogTitle id='modal delete' sx={{ p: 4 }}>
        <Typography variant='h6' component='span'>
          Atenção!
        </Typography>
        <IconButton
          aria-label='close'
          onClick={toggleModal}
          sx={{ top: 10, right: 10, position: 'absolute', color: 'grey.500' }}
        >
          <Icon icon='mdi:close' />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ p: 4 }}>
        <TrashcamAnimation />
        <Typography sx={{ mb: 4 }} textAlign={'center'}>
          Esta ação resultará na remoção <strong>permanente</strong> do Pet e não poderá ser revertida. Você tem certeza
          de que deseja continuar?
        </Typography>
      </DialogContent>
      <DialogActions sx={{ mt: 3 }}>
        <Button onClick={toggleModal} variant='text'>
          Cancelar
        </Button>

        <Button onClick={() => console.log('call delete method and passes the id')} color='error' variant='outlined'>
          Deletar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ModalDelete
