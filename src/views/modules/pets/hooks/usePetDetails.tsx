import { useCallback } from 'react'
import useLoading from 'src/hooks/loading/useLoading'
import { useAppDispatch } from 'src/hooks/useRedux'
import { loadPetById } from 'src/store/pets'
import { HttpMethod, httpRequest } from 'src/utils/http'
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

  const generatePetCardPdf = async (petId: string | undefined) => {
    await httpRequest<void, Blob>(HttpMethod.GET, `/v1/pets/generate-card/${petId}`, undefined, 'blob')
      .then(res => {
        openPdfInNewTab(generatePdfUrl(generateBlob(res)))
      })
      .catch(err => console.log(err))
  }

  const generateBlob = (data: Blob) => {
    return new Blob([data], { type: 'application/pdf' })
  }

  const generatePdfUrl = (data: Blob) => {
    return URL.createObjectURL(generateBlob(data))
  }

  const openPdfInNewTab = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank')
  }

  return { getPetDetailedInfo, generatePetCardPdf, isLoading }
}

export default usePetDetails
