const host = [
	'http://localhost:3001',
	process.env.NEXT_PUBLIC_SERVER_URL
]

export const settings = {
	BASE_PATH: process.env.NODE_ENV === 'production' ? host[1] : host[0],
	devMode: false
}