import { FC } from 'react'
import  Head from 'next/head'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core'
import SwiperCore, {
	Pagination,
	Navigation
} from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import '../styles/styles.scss'
import store from '../redux/store'
import theme from '../config/theme'

import Layout from '../components/init/Layout'


SwiperCore.use([Pagination, Navigation]);

const _app: FC<AppProps> = ( { Component, pageProps } ) => {

	return (
		<Provider store={ store } >
			<Head>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				<title>BitBlog - Best API for getting a blog</title>
			</Head>
			
			<ThemeProvider theme={ theme } >
				<Layout>
					<Component { ...pageProps } />
				</Layout>
			</ThemeProvider>
		</Provider>
	)
}

export default _app