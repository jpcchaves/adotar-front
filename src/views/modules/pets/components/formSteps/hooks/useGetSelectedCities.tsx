import { FormikValues } from 'formik'
import { useEffect, useState } from 'react'
import { HttpMethod, httpRequest } from 'src/utils/http'

interface IProps {
  validation: FormikValues
}

const useGetSelectedCities = ({ validation }: IProps) => {
  const [selectedCities, setSelectedCities] = useState([])

  const getCitiesByState = async () => {
    if (validation.values.state) {
      await httpRequest<any, any>(HttpMethod.GET, `/v1/cities?stateId=${validation.values.state}`)
        .then(res => {
          setSelectedCities(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  useEffect(() => {
    getCitiesByState()
  }, [validation.values.state])

  return { selectedCities }
}

export default useGetSelectedCities
