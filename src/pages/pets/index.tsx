'use client'

import { Typography } from '@mui/material'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { useEffect } from 'react'
import usePets from 'src/hooks/pets/usePets'
import { useAppSelector } from 'src/hooks/useRedux'

const PetsPage = () => {
  const { pets } = useAppSelector(state => state.pets)
  const { getListPets } = usePets()

  useEffect(() => {
    getListPets()
  }, [])

  return (
    <Grid container spacing={6}>
      {(pets || []).map(pet => (
        <Grid item xs={12} key={`petCard-${pet.id}`}>
          <Typography>{pet.name}</Typography>
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
