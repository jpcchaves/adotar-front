import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import AuthReducer from './auth'

export const store = configureStore({
  reducer: {
    auth: AuthReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
