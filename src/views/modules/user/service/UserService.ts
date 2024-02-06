import { UpdatePasswordDTO } from 'src/domain/DTO/auth/UpdatePasswordDTO'
import { ApiMessageResponse } from 'src/domain/models/ApiMessageResponse'

export interface UserService {
  updateUserPassword: (requestDTO: UpdatePasswordDTO) => Promise<ApiMessageResponse>
}
