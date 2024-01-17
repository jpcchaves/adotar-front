import { Grid } from '@mui/material'
import { useEffect } from 'react'
import { useAppSelector } from 'src/hooks/useRedux'
import PetHorizontalCard from '../../components/petHorizontalCard'
import useMyPets from '../../hooks/useMyPets'

const MyPets = () => {
  const { getMyPets } = useMyPets()
  const { myPets } = useAppSelector(state => state.pets)

  useEffect(() => {
    getMyPets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid container spacing={5}>
      {(myPets || []).map((pet, idx) => (
        <Grid item xs={12} key={idx}>
          <PetHorizontalCard pet={pet} />
        </Grid>
      ))}
    </Grid>
  )
}

export default MyPets
