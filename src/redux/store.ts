import { configureStore } from '@reduxjs/toolkit'

import userReducer from './slices/userSlice'
import shopCartReducer from './slices/shopCartSlice'


const store = configureStore({
	reducer: {
		user: userReducer,
		shopCart: shopCartReducer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store