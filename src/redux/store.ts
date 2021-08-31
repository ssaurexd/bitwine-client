import { configureStore, combineReducers, AnyAction } from '@reduxjs/toolkit'

import userReducer from './slices/userSlice'
import storeReducer from './slices/storeSlice'
import appReducer from './slices/appSlice'


export const rootReducer = combineReducers({
	user: userReducer,
	store: storeReducer,
	app: appReducer
})

export const store = configureStore({
	reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store