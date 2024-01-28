import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import ModalDelete from 'src/@core/components/deleteModal'
import useModalControls from 'src/hooks/modalControls/useModalControls'
import { useAppSelector } from 'src/hooks/useRedux'
import PetHorizontalCard from '../../components/petHorizontalCard'
import useHandleInfiniteScroll from '../../hooks/useHandleInfiniteScroll'
import useMyPets from '../../hooks/useMyPets'
import usePets from '../../hooks/usePets'

const MyPets = () => {
  const [selectedPetId, setSelectedPetId] = useState('')

  const { isOpen, toggleModal: toggleDeleteModal } = useModalControls()
  const { getMyPets, deletePet } = useMyPets({ toggleDeleteModal, setSelectedPetId })
  const { getPetDetails } = usePets()
  const { myPets } = useAppSelector(state => state.pets)

  useHandleInfiniteScroll({ getListPets: getMyPets })

  useEffect(() => {
    getMyPets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid container spacing={5}>
      <ModalDelete isOpen={isOpen} toggleModal={toggleDeleteModal} handleDelete={() => deletePet(selectedPetId)} />
      {(myPets || []).map((pet, idx) => (
        <Grid item xs={12} key={idx}>
          <PetHorizontalCard
            pet={pet}
            getPetDetails={getPetDetails}
            setSelectedPetId={setSelectedPetId}
            toggleDeleteModal={toggleDeleteModal}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default MyPets
