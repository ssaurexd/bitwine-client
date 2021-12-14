import { GetServerSideProps } from 'next'
import fs from 'fs'
import { settings } from '../config/settings';
import { getAllProducts } from '../api/productApi';



const Sitemap = () => {};

export const getServerSideProps: GetServerSideProps =  async ({ res }) => {

	const baseUrl = 'https://bitwine-client.herokuapp.com'
	const { products } = await getAllProducts()
	
	const staticPages = fs
		.readdirSync('src/pages')
		.filter( ( staticPage ) => {
			return ![
				'_app.tsx',
				'_document.tsx',
				'sitemap.xml.tsx',
				'index.tsx',
				'admin',
				'product'
			].includes( staticPage )
		})
		.map( ( staticPagePath ) => {

		  	return `${ baseUrl }/${ staticPagePath }`
		})
	
	const sitemap = `<?xml version='1.0' encoding='UTF-8'?>
		<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>
			<url>
				<loc>https://bitwine-client.herokuapp.com/</loc>
				<lastmod>${ new Date().toISOString() }</lastmod>
				<changefreq>monthly</changefreq>
				<priority>1.0</priority>
			</url>
			${staticPages.map((url) => {

					return `
						<url>
							<loc>${ url.substr( -url.length, url.length - 4  ) }</loc>
							<lastmod>${ new Date().toISOString() }</lastmod>
							<changefreq>monthly</changefreq>
							<priority>1.0</priority>
						</url>
					`
				}).join('')
			}
			${products?.map( ({ slug, updatedAt }) => {

				  return `
					  <url>
						<loc>${ baseUrl }/product/${ slug }</loc>
						<lastmod>${ updatedAt }</lastmod>
						<changefreq>monthly</changefreq>
						<priority>1.0</priority>
					  </url>
					`;
				}).join('')
			}
		</urlset>
	`
			
	res.setHeader('Content-Type', 'text/xml');
	res.write(sitemap);
	res.end();

	return {
		props: {}
	}
}

export default Sitemap