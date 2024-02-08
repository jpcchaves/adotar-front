import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AddressResponseDTO } from 'src/domain/DTO/address/AddressResponseDTO'

export interface UserDetailsState {
  userAddress: AddressResponseDTO | null
}

type PayloadUserAddress = PayloadAction<AddressResponseDTO>

const initialState: UserDetailsState = {
  userAddress: null
}

export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    loadUserAddress: (state: UserDetailsState, action: PayloadUserAddress) => {
      state.userAddress = action.payload
    }
  }
})

export const { loadUserAddress } = userDetailsSlice.actions

export default userDetailsSlice.reducer
