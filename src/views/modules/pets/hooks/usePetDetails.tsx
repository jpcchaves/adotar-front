import { useCallback } from 'react'
import useLoading from 'src/hooks/loading/useLoading'
import { useAppDispatch } from 'src/hooks/useRedux'
import { loadPetById } from 'src/store/pets'
import { petDetailsService } from '../service/impl/PetDetailsServiceImpl'

const usePetDetails = () => {
  const dispatch = useAppDispatch()
  const { isLoading, setLoading } = useLoading()

  const getPetDetailedInfo = useCallback(async (petId: string) => {
    setLoading(true)
    await petDetailsService
      .getPetDetailedInfo(petId)
      .then(res => {
        dispatch(loadPetById(res))
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { getPetDetailedInfo, isLoading }
}

export default usePetDetails
