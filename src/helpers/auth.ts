export const getToken = (): string | null => {
	
	const token = localStorage.getItem('token')

	return token
}

export const getRememberMe = (): boolean => {
	
	const rememberMe = localStorage.getItem('rememberMe')

	if( rememberMe && rememberMe === 'true' ) return true
	else if( rememberMe && rememberMe === 'false' ) return false
	else return false
}

export const getIsLoggedIn = (): boolean => {
	
	const isLoggedIn = localStorage.getItem('isLoggedIn')

	if( isLoggedIn && isLoggedIn === 'true' ) return true
	else if( isLoggedIn && isLoggedIn === 'false' ) return false
	else return false
}