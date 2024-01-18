import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PetDetailsDTO } from 'src/domain/DTO/pet/PetDetailsDTO'
import { ApiResponsePaginated } from 'src/domain/models/ApiResponsePaginated'
import { PetModelMin } from 'src/domain/models/pet/PetModel'

export interface PetsState {
  pets: PetModelMin[] | null
  myPets: PetModelMin[] | null
  petDetails: PetDetailsDTO | null
  pageNo: number
  totalElements: number
  totalPages: number
  pageSize: number
  last: boolean
}

type PayloadPetsPaginated = PayloadAction<ApiResponsePaginated<PetModelMin>>
type PayloadPets = PayloadAction<PetModelMin[]>
type PayloadPetDetails = PayloadAction<PetDetailsDTO>

const initialState: PetsState = {
  pets: null,
  myPets: null,
  petDetails: null,
  pageNo: 0,
  last: true,
  pageSize: 0,
  totalElements: 0,
  totalPages: 0
}

export const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    loadPetsPaginated: (
      state,
      { payload: { totalPages, totalElements, pageNo, pageSize, last, content } }: PayloadPetsPaginated
    ) => {
      state.pets = content
      state.pageNo = pageNo
      state.last = last
      state.pageSize = pageSize
      state.totalPages = totalPages
      state.totalElements = totalElements
    },
    loadPets: (state, action: PayloadPets) => {
      state.pets = action.payload
    },
    loadMyPets: (state, action: PayloadPets) => {
      state.myPets = action.payload
    },
    loadPetDetails: (state, action: PayloadPetDetails) => {
      state.petDetails = action.payload
    }
  }
})

export const { loadPetsPaginated, loadPets, loadMyPets, loadPetDetails } = petsSlice.actions

export default petsSlice.reducer
