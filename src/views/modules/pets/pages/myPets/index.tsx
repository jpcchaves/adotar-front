import { Grid } from '@mui/material'
import { useEffect } from 'react'
import { useAppSelector } from 'src/hooks/useRedux'
import PetHorizontalCard from '../../components/petHorizontalCard'
import useMyPets from '../../hooks/useMyPets'
import usePets from '../../hooks/usePets'
import ModalDelete from 'src/@core/components/deleteModal'

const MyPets = () => {
  const { getMyPets } = useMyPets()
  const { getPetDetails } = usePets()
  const { myPets } = useAppSelector(state => state.pets)

  useEffect(() => {
    getMyPets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid container spacing={5}>
      <ModalDelete isOpen toggleModal={() => console.log('toggle modal')} />

      {(myPets || []).map((pet, idx) => (
        <Grid item xs={12} key={idx}>
          <PetHorizontalCard pet={pet} getPetDetails={getPetDetails} />
        </Grid>
      ))}
    </Grid>
  )
}

export default MyPets
