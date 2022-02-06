import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import SwiperCore, {
	Pagination,
	Navigation,
	Mousewheel,
	Keyboard,
	Autoplay,
	Thumbs
} from 'swiper/core'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/thumbs/thumbs.min.css'
import 'suneditor/dist/css/suneditor.min.css'

import '../styles/styles.scss'
import store from '../redux/store'
import theme from '../config/theme'
import * as gtag from '../lib/gtag'

import Toast from '../components/Toast'


SwiperCore.use([ Pagination, Navigation, Mousewheel, Keyboard, Autoplay, Thumbs ]);

const _app: FC<AppProps> = ( { Component, pageProps } ) => {

	const router = useRouter()

	/* efetcs */
	useEffect( () => {

		const handleRouteChange = ( url: URL ) => {
			gtag.pageview( url )
		}

		router.events.on( 'routeChangeComplete', handleRouteChange )

		return () => {
			router.events.off( 'routeChangeComplete', handleRouteChange )
		}
	},  [ router.events ])

	return (
		<Provider store={ store } >
			<ThemeProvider theme={ theme } >
				<CssBaseline />
				<Component { ...pageProps } />
				<Toast />
			</ThemeProvider>
		</Provider>
	)
}

export default _app
