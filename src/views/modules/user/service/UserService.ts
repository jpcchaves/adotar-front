import { AddressRequestDTO } from 'src/domain/DTO/address/AddressRequestDTO'
import { AddressResponseDTO } from 'src/domain/DTO/address/AddressResponseDTO'
import { UpdatePasswordDTO } from 'src/domain/DTO/auth/UpdatePasswordDTO'
import { ContactRequestDTO } from 'src/domain/DTO/contact/ContactRequestDTO'
import { ContactResponseDTO } from 'src/domain/DTO/contact/ContactResponseDTO'
import { ApiMessageResponse } from 'src/domain/models/ApiMessageResponse'

export interface UserService {
  updateUserPassword: (requestDTO: UpdatePasswordDTO) => Promise<ApiMessageResponse>
  createUserAddress: (requestDTO: AddressRequestDTO) => Promise<ApiMessageResponse>
  updateUserAddress: (requestDTO: AddressRequestDTO) => Promise<ApiMessageResponse>
  getUserAddress: () => Promise<AddressResponseDTO>
  createUserContact: (requestDTO: ContactRequestDTO) => Promise<ApiMessageResponse>
  updateUserContact: (requestDTO: ContactRequestDTO) => Promise<ApiMessageResponse>
  getUserContact: () => Promise<ContactResponseDTO>
}
