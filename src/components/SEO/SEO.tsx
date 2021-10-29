import { FC } from 'react'
import Head from 'next/head'


interface Props {
	desc: string,
	title: string
	urlImage: string,
	url: string,
	facebookDesc?: string,
	facebookTitle?: string,
	facebookUrlImage?: string,
	twitterDesc?: string,
	twitterTitle?: string,
	twitterUrlImage?: string,
}

const SEO: FC<Props> = ( props ) => {

	/* props */
	const {
		title,
		url,
		desc,
		urlImage,
		facebookDesc,
		facebookTitle,
		facebookUrlImage,
		twitterDesc,
		twitterTitle,
		twitterUrlImage
	} = props

	return (
		<Head>
			<meta name="title" content={ title } />
			<meta name="description" content={ desc } />
			{/* Facebook */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={ url } />
			<meta property="og:title" content={ facebookTitle ? facebookTitle : title } />
			<meta property="og:description" content={ facebookDesc ? facebookDesc : desc } />
			<meta property="og:image" content={ facebookUrlImage ? facebookUrlImage : urlImage } />
			{/* Twitter */}
			<meta property="twitter:url" content={ url } />
			<meta property="twitter:title" content={ twitterTitle ? twitterTitle : title } />
			<meta property="twitter:description" content={ twitterDesc ? twitterDesc : desc } />
			<meta property="twitter:image" content={ twitterUrlImage ? twitterUrlImage : urlImage } />
			<meta name="keywords" content="Vinos, Comprar, Comprar vino en linea, en linea, seguro, tienda en linea, Vino blanco, Vino rosa, oferta vinos" />
			<title>{ title }</title>
		</Head>
	)
}

export default SEO
