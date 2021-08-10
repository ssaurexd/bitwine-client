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