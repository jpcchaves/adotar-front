import { CircularProgress, Grid } from '@mui/material'
import { useEffect } from 'react'
import { useAppSelector } from 'src/hooks/useRedux'
import PetCard from '../../components/petCard'
import useHandleInfiniteScroll from '../../hooks/useHandleInfiniteScroll'
import usePets from '../../hooks/usePets'

const PetsList = () => {
  const { pets } = useAppSelector(state => state.pets)
  const { getListPets, isLoading, toggleSavedPet } = usePets()
  useHandleInfiniteScroll({ getListPets })

  useEffect(() => {
    getListPets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid container spacing={6}>
      {(pets || []).map(pet => (
        <Grid item xs={12} sm={6} md={4} key={`petCard-${pet.id}`}>
          <PetCard pet={pet} toggleSavedPet={toggleSavedPet} />
        </Grid>
      ))}

      {isLoading && (
        <Grid item xs={12} display={'flex'} justifyContent={'center'} mb={200}>
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  )
}

export default PetsList
