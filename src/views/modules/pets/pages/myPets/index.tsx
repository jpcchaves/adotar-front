import { useEffect } from 'react'
import PetHorizontalCard from '../../components/petHorizontalCard'
import useMyPets from '../../hooks/useMyPets'

const MyPets = () => {
  const { getMyPets } = useMyPets()

  useEffect(() => {
    getMyPets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <PetHorizontalCard />
    </>
  )
}

export default MyPets
