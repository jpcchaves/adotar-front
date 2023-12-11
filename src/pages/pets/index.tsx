'use client'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { useEffect } from 'react'
import PetCard from 'src/@core/components/petCard'
import useHandleInfiniteScroll from 'src/hooks/pets/useHandleInfiniteScroll'
import usePets from 'src/hooks/pets/usePets'
import { useAppSelector } from 'src/hooks/useRedux'

const PetsPage = () => {
  const { pets } = useAppSelector(state => state.pets)
  const { getListPets } = usePets()
  useHandleInfiniteScroll({ getListPets })

  useEffect(() => {
    getListPets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid container spacing={6}>
      {(pets || []).map(pet => (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={`petCard-${pet.id}`}>
          <PetCard pet={pet} />
        </Grid>
      ))}
    </Grid>
  )
}

PetsPage.acl = {
  action: 'manage',
  subject: 'pets'
}

export default PetsPage
