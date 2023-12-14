import { useEffect } from 'react'
import { useAppSelector } from '../../../../hooks/useRedux'

interface IProps {
  getListPets: (page?: number) => void
}

type ScrollVerificationResult = {
  isScrollingDown: boolean
  shouldLoadMore: boolean
}

const useHandleInfiniteScroll = ({ getListPets }: IProps) => {
  const { pageNo, totalPages, last } = useAppSelector(state => state.pets)

  const handleLoadMore = () => {
    const nextPage = pageNo + 1
    if (nextPage <= totalPages) {
      getListPets(nextPage)
    }
  }

  const checkScroll = (
    scrollTop: number,
    clientHeight: number,
    scrollHeight: number,
    threshold: number
  ): ScrollVerificationResult => {
    const isScrollingDown = scrollTop + clientHeight >= scrollHeight - threshold
    const shouldLoadMore = isScrollingDown

    return {
      isScrollingDown,
      shouldLoadMore
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 5
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement

      const { shouldLoadMore } = checkScroll(scrollTop, clientHeight, scrollHeight, scrollThreshold)

      if (shouldLoadMore && !last) {
        handleLoadMore()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNo, totalPages])
}

export default useHandleInfiniteScroll
