import { UserModel } from '@/domain/models/user/UserModel';

export interface LoginResponseDTO {
  accessToken: string;
  user: UserModel;
}
