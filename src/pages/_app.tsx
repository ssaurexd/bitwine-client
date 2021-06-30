import  Head from 'next/head'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core'

import store from '../redux/store'
import theme from '../styles/theme'


const _app = ( { Component, pageProps }: AppProps ) => {

	return (
		<Provider store={ store } >
			<Head>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
			</Head>
			
			<ThemeProvider theme={ theme } >
				<Component { ...pageProps } />
			</ThemeProvider>
		</Provider>
	)
}

export default _app