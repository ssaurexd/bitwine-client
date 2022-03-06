import React from 'react'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { IProduct } from '../../interfaces/productInterfaces'
import { getProductBySlug, getProductSlugs } from '../../api/productApi'
import { settings } from '../../config/settings'
 
import Auth from '../../components/init/Auth'
import FooterMain from '../../components/FooterMain'
import Layout from '../../components/init/Layout'
import ProductOnePage from '../../components/ProductOnePage'
import SEO from '../../components/SEO'
import { removeHTMLTags } from '../../helpers/helpers'



interface Props {
	product: IProduct,
	related: IProduct[]
}

const productPage: NextPage<Props> = ({ product, related }) => {

	return (
		<>
			<SEO
				desc={ removeHTMLTags( product.description ) }
				title={ `BitWine - ${ product.name }` }
				url={ `https://bitwine-client.herokuapp.com/product/${ product.slug }` }
				urlImage={ `https://bitwine-server.herokuapp.com/${ product.image }` }
			/>
			
			<Auth
				admitedRoles={ ['admin', 'guest', 'user'] }
			>	
				<Layout >
					<ProductOnePage product={ product } related={ related } />
					<FooterMain />
				</Layout>
			</Auth>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async ( ctx ) => {
	
	const { productSlugs } = await getProductSlugs()

	return {
		paths: productSlugs.map( product =>  {
			return {
				params: {
					slug: product.slug
				}
			}
		}),
		fallback: 'blocking'
	}
}


interface Params extends ParsedUrlQuery {
	slug: string
}
export const getStaticProps: GetStaticProps = async ( ctx ) => {

	const { slug } = ( ctx.params as Params )
	const { ok, product, related } = await getProductBySlug( slug )

	if( !ok ) {

		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	}

	return {
		props: {
			product,
			related
		},
		revalidate: 86400 // 24h
	}
}

export default productPage
