import { Roles } from '../redux/slices/userSlice'


export interface TopLevel {
	ok:    boolean;
	user:  User,
	msg?: string
}

export interface User {
	role:      Roles;
	_id:       string;
	email:     string;
	name:      string;
	lastName:  string;
}
