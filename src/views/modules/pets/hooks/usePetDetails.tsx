import { useCallback } from 'react'
import { petDetailsService } from '../service/impl/PetDetailsServiceImpl'

const usePetDetails = () => {
  const getPetDetailedInfo = useCallback(async (petId: string) => {
    await petDetailsService
      .getPetDetailedInfo(petId)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return { getPetDetailedInfo }
}

export default usePetDetails
