import { FormikValues } from 'formik'
import { useEffect, useState } from 'react'
import { City } from 'src/domain/models/geolocation/City'
import { HttpMethod, httpRequest } from 'src/utils/http'

interface IProps {
  validation: FormikValues
}

const useGetSelectedCities = ({ validation }: IProps) => {
  const [selectedCities, setSelectedCities] = useState<City[]>([])

  const getCitiesByState = async () => {
    if (validation.values.state) {
      await httpRequest<void, City[]>(HttpMethod.GET, `/v1/cities?stateId=${validation.values.state?.value}`)
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
  }, [validation.values.state?.value])

  return { selectedCities }
}

export default useGetSelectedCities
