import { Roles } from '../redux/slices/userSlice'

// /login
export interface IAPILoginTopLevel {
	ok:    boolean;
	user:  IAPIUser,
	msg?: string,
	token: string
}
export interface IAPIUser {
	role:      Roles;
	_id:       string;
	email:     string;
	name:      string;
	lastName:  string;
	address: IUserAddress[]
}

export interface IUserAddress {
	name: string,
	lastName?: string,
	street: string,
	houseNumber: string,
	zip: string,
	phone: string,
	email: string,
	suburb: string,
	delegation: string,
	state: string
}

// /refresh-token
export interface IAPIRefreshTokenTopLevel {
	ok: boolean,
	user: IAPIUser,
	msg: string,
	token: string
	expired?: boolean
}

//logout
export interface IAPILogOutTopLevel {
	ok: boolean
}