import { getCookie } from 'cookies-next'

const ACCESS_TOKEN_COOKIE_KEY = 'accessToken'

export const getAuthToken = () => {
  return getCookie(ACCESS_TOKEN_COOKIE_KEY)
}
