import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../config/theme';

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