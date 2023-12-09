import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import AuthReducer from './auth'
import PetsReducer from './pets'

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    pets: PetsReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
