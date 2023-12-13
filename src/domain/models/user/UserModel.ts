import { UserRoleModel } from './UserRoleModel'

export interface UserModel {
  id: number
  firstName: string
  lastName: string
  name: string
  username: string
  email: string
  photoUrl?: string
  roles: UserRoleModel[]
  createdAt: Date
  updatedAt: Date
  deletedAt: null
  active: boolean
  admin: boolean
}
