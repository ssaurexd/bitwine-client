import { configureStore } from '@reduxjs/toolkit'

import userReducer from './slices/userSlice'
import storeReducer from './slices/storeSlice'
import appReducer from './slices/appSlice'


const store = configureStore({
	reducer: {
		user: userReducer,
		store: storeReducer,
		app: appReducer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store