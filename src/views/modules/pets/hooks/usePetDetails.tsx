import { petDetailsService } from '../service/impl/PetDetailsServiceImpl'

const usePetDetails = () => {
  const getPetDetailedInfo = async (petId: string) => {
    await petDetailsService
      .getPetDetailedInfo(petId)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return { getPetDetailedInfo }
}

export default usePetDetails
