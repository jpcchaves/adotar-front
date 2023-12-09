import { LoginRequestDTO } from 'src/domain/DTO/auth/LoginRequestDTO'
import { RegisterRequestDTO } from 'src/domain/DTO/auth/RegisterRequestDTO'
import { UserModel } from 'src/domain/models/user/UserModel'

export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  email: string
  password: string
  rememberMe?: boolean
}

export type RegisterParams = {
  email: string
  username: string
  password: string
}

export type UserDataType = {
  id: number
  role: string
  email: string
  fullName: string
  username: string
  password: string
  avatar?: string | null
}

export type AuthValuesType = {
  loading: boolean
  isSubmitting: boolean
  logout: () => void
  user: UserModel | null
  setIsSubmitting: (value: boolean) => void
  setLoading: (value: boolean) => void
  setUser: (value: UserModel | null) => void
  login: (data: LoginRequestDTO) => void
  register: (data: RegisterRequestDTO) => void
}
