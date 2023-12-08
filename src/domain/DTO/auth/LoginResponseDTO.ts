import { UserModel } from 'src/domain/models/user/UserModel'

export interface LoginResponseDTO {
  accessToken: string
  user: UserModel
}
