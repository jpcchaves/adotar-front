import { AddressRequestDTO } from 'src/domain/DTO/address/AddressRequestDTO'
import { UpdatePasswordDTO } from 'src/domain/DTO/auth/UpdatePasswordDTO'
import { ContactRequestDTO } from 'src/domain/DTO/contact/ContactRequestDTO'
import { UpdateUserNameDTO } from 'src/domain/DTO/userDetails/UpdateUserNameDTO'
import { UserDetailsDTO } from 'src/domain/DTO/userDetails/UserDetailsDTO'
import { ApiMessageResponse } from 'src/domain/models/ApiMessageResponse'

export interface UserService {
  updateUserPassword: (requestDTO: UpdatePasswordDTO) => Promise<ApiMessageResponse>
  createUserAddress: (requestDTO: AddressRequestDTO) => Promise<ApiMessageResponse>
  updateUserAddress: (requestDTO: AddressRequestDTO) => Promise<ApiMessageResponse>
  createUserContact: (requestDTO: ContactRequestDTO) => Promise<ApiMessageResponse>
  updateUserContact: (requestDTO: ContactRequestDTO) => Promise<ApiMessageResponse>
  updateUserName: (requestDTO: UpdateUserNameDTO) => Promise<ApiMessageResponse>
  getUserDetails: () => Promise<UserDetailsDTO>
}
