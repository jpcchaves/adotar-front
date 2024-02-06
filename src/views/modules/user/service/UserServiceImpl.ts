import { UpdatePasswordDTO } from 'src/domain/DTO/auth/UpdatePasswordDTO'
import { ApiMessageResponse } from 'src/domain/models/ApiMessageResponse'
import { HttpMethod, httpRequest } from 'src/utils/http'
import { UserService } from './UserService'

class UserServiceImpl implements UserService {
  updateUserPassword = async (requestDTO: UpdatePasswordDTO): Promise<ApiMessageResponse> => {
    return new Promise((resolve, reject) => {
      httpRequest<UpdatePasswordDTO, ApiMessageResponse>(HttpMethod.PUT, '/v1/auth/update-password', requestDTO)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export const userService = new UserServiceImpl()
