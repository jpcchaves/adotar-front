import useLoading from 'src/hooks/loading/useLoading'
import { HttpMethod, httpRequest } from 'src/utils/http'
import {} from 'src/configs/routes/pets'

const useMyPets = () => {
  const { setLoading, isLoading } = useLoading()
  const getMyPets = async () => {
    setLoading(true)

    await httpRequest(HttpMethod.GET, '/v1/pets/by-user?size=10&page=0&sort=id,desc')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return { getMyPets, isLoading }
}

export default useMyPets
