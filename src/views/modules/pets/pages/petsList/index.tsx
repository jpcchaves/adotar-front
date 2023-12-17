import { Icon } from '@iconify/react'
import { CircularProgress, Fab, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import FloatButton from 'src/@core/components/floatButton'
import { useAppSelector } from 'src/hooks/useRedux'
import PetCard from '../../components/petCard'
import useHandleInfiniteScroll from '../../hooks/useHandleInfiniteScroll'
import usePets from '../../hooks/usePets'

const PetsList = () => {
  const router = useRouter()
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

      <FloatButton onClick={() => router.push('/pets/novo')}>
        <Fab color='primary' aria-label='add' size='small'>
          <Icon icon='mdi:plus' fontSize={'22'} />
        </Fab>
      </FloatButton>

      {isLoading && (
        <Grid item xs={12} display={'flex'} justifyContent={'center'} mb={200}>
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  )
}

export default PetsList
