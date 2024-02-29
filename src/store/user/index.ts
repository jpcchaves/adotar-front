import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserDetailsDTO } from 'src/domain/DTO/userDetails/UserDetailsDTO'

export interface UserDetailsState {
  userDetails: UserDetailsDTO | null
}

type PayloadUserDetails = PayloadAction<UserDetailsDTO>

const initialState: UserDetailsState = {
  userDetails: null
}

export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    loadUserInfo: (state: UserDetailsState, action: PayloadUserDetails) => {
      state.userDetails = action.payload
    }
  }
})

export const { loadUserInfo } = userDetailsSlice.actions

export default userDetailsSlice.reducer
