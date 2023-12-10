'use client'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { useEffect } from 'react'
import PetCard from 'src/@core/components/petCard'
import usePets from 'src/hooks/pets/usePets'
import { useAppSelector } from 'src/hooks/useRedux'

const PetsPage = () => {
  const { pets } = useAppSelector(state => state.pets)
  const { getListPets } = usePets()

  useEffect(() => {
    getListPets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid container spacing={6}>
      {(pets || []).map(pet => (
        <Grid item xs={12} sm={6} md={3} lg={4} xl={4} key={`petCard-${pet.id}`}>
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