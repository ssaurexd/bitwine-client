import { configureStore } from '@reduxjs/toolkit'

import userReducer from './slices/userSlice'
import shopCartReducer from './slices/shopCartSlice'
import appReducer from './slices/appSlice'


const store = configureStore({
	reducer: {
		user: userReducer,
		shopCart: shopCartReducer,
		app: appReducer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store