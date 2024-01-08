import { useRouter } from 'next/router'

interface IUseNavigation {
  navigate: (path: string) => void
  navigateWithTime: (path: string, time: number) => void
  navigateBackDelayed: (time: number) => void
}

const useNavigation = (): IUseNavigation => {
  const router = useRouter()

  const navigate = (path: string) => {
    router.push(path)
  }

  const navigateWithTime = (path: string, time: number) => {
    setTimeout(() => {
      router.push(path)
    }, time)
  }

  const navigateBackDelayed = (time: number) => {
    setTimeout(() => {
      router.back()
    }, time)
  }

  return { navigate, navigateWithTime, navigateBackDelayed }
}

export default useNavigation
