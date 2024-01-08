import { useRouter } from 'next/router'

const useNavigation = () => {
  const router = useRouter()

  const navigate = (path: string) => {
    router.replace(path)
  }

  const navigateWithTime = (path: string, time: number) => {
    setTimeout(() => {
      router.replace(path)
    }, time)
  }

  return { navigate, navigateWithTime }
}

export default useNavigation
