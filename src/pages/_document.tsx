import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../config/theme';

export default class MyDocument extends Document {

	render() {
		return (
			<Html lang="es">
				<Head>
					<meta name="theme-color" content={theme.palette.primary.main} />
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
					<meta name="title" content="BitBlog - Best API for getting fast blog" />
					<meta name="description" content="BitBlog is a web site for getting an API and make blog faster than you imagene" />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://www.bitblog.com/" />
					<meta property="og:title" content="BitBlog - Best API for getting fast blog" />
					<meta property="og:description" content="BitBlog is a web site for getting an API and make blog faster than you imagene" />
					<meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
					<meta property="twitter:card" content="summary_large_image" />
					<meta property="twitter:url" content="https://www.bitblog.com/" />
					<meta property="twitter:title" content="BitBlog - Best API for getting fast blog" />
					<meta property="twitter:description" content="BitBlog is a web site for getting an API and make blog faster than you imagene" />
					<meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
					<meta name="keywords" content="API, Blog, SEO, Fast, BItBlog, Make a blog faster" />
					<meta name="robots" content="index, follow" />
					<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
					<meta name="language" content="Spanish" />
				</Head>
				
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {

	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () => 
		originalRenderPage({
			enhanceApp: ( App ) => ( props ) => sheets.collect( <App { ...props }/> ),
		});
	

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
	};
};