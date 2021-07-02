import { createSlice } from '@reduxjs/toolkit'


interface Roles {
	role: 
		'' |
		'user' |
		'admin'
}
interface UserState extends Roles {
	email: string,
	name: string,
	lastName: string,
	online: boolean
}

const initialState: UserState = {
	email: '',
	name: '',
	lastName: '',
	role: 'user',
	online: false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
	}
})
export const {
} = userSlice.actions

export default userSlice.reducer