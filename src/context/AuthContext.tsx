// ** React Imports
import { ReactNode, createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

import { deleteCookie, getCookie, setCookie } from 'cookies-next'

// ** Config
import authConfig from 'src/configs/auth'

// ** Types
import { LoginResponseDTO } from 'src/domain/DTO/auth/LoginResponseDTO'
import { UserModel } from 'src/domain/models/user/UserModel'
import { useAppDispatch } from 'src/hooks/useRedux'
import { loadAuth, loadAuthError, loadClearError } from 'src/store/auth'
import { HttpMethod, httpRequest, setAuthToken } from 'src/utils/http'
import { AuthValuesType, ErrCallbackType, LoginParams, RegisterParams } from './types'

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  isSubmitting: false,
  setIsSubmitting: () => Boolean,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserModel | null>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  // ** Hooks
  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      const storedToken = getCookie(authConfig.storageTokenKeyName)

      if (storedToken) {
        setLoading(true)
        await httpRequest<{ accessToken: string }, LoginResponseDTO>(HttpMethod.POST, authConfig.meEndpoint, {
          accessToken: storedToken
        })
          .then(async response => {
            setUser({ ...response.user })
            setAuthToken(response.accessToken)
            dispatch(loadAuth(response))
          })
          .catch(() => {
            deleteCookie('user')
            deleteCookie('accessToken')
            setUser(null)
            if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
              router.replace('/login')
            }
          })
          .finally(() => {
            setLoading(false)
          })
      } else {
        setLoading(false)
      }
    }

    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const clearAuthError = () => {
    setTimeout(() => {
      dispatch(loadClearError())
    }, 3000)
  }

  const handleLogin = (data: LoginParams) => {
    setIsSubmitting(() => true)
    httpRequest<LoginParams, LoginResponseDTO>(HttpMethod.POST, authConfig.loginEndpoint, data)
      .then(async response => {
        if (data.rememberMe) {
          setCookie(authConfig.storageTokenKeyName, response.accessToken)
          localStorage.setItem('rememberedEmail', response.user.email)
        }
        const returnUrl = router.query.returnUrl
        setAuthToken(response.accessToken)
        setUser({ ...response.user })
        dispatch(loadAuth(response))
        data.rememberMe ? setCookie('user', JSON.stringify(response.user)) : null

        const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'

        router.replace(redirectURL as string)
      })

      .catch(err => {
        dispatch(loadAuthError({ errorMessage: err, hasError: true }))
        clearAuthError()
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  const handleLogout = () => {
    setUser(null)
    deleteCookie('user')
    deleteCookie(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const handleRegister = (params: RegisterParams, errorCallback?: ErrCallbackType) => {
    axios
      .post(authConfig.registerEndpoint, params)
      .then(res => {
        if (res.data.error) {
          if (errorCallback) errorCallback(res.data.error)
        } else {
          handleLogin({ email: params.email, password: params.password })
        }
      })
      .catch((err: { [key: string]: string }) => (errorCallback ? errorCallback(err) : null))
  }

  const values = {
    user,
    loading,
    isSubmitting,
    setIsSubmitting,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
