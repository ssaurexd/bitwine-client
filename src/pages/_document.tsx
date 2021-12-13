import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'

import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../config/theme';
import { GA_TRACKING_ID } from '../lib/gtag'

export default class _document extends Document {

	render() {
		return (
			<Html lang="es">
				<Head>
					<meta name="theme-color" content={theme.palette.primary.main} />
					<meta name="robots" content="index, follow" /> 
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
					<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
					<meta name="language" content="spanish" />
					<Script
						strategy="afterInteractive"
						src={`https://www.googletagmanager.com/gtag/js?id=${ GA_TRACKING_ID }`}
					/>
					<Script
						id="gtag-init"
						strategy="afterInteractive"
						dangerouslySetInnerHTML={{
							__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', '${ GA_TRACKING_ID }', {
								page_path: window.location.pathname,
								});
							`,
						}}
					/>
				</Head>
				
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

_document.getInitialProps = async (ctx) => {

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