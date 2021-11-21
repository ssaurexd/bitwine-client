import React from 'react'
import { NextPage, GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { IProduct } from '../../interfaces/productInterfaces'
import { getProductBySlug } from '../../api/productApi'
import { settings } from '../../config/settings'
 
import Auth from '../../components/init/Auth'
import FooterMain from '../../components/FooterMain'
import Layout from '../../components/init/Layout'
import ProductOnePage from '../../components/ProductOnePage'
import SEO from '../../components/SEO'



interface Props {
	product: IProduct,
	related: IProduct[]
}

const productPage: NextPage<Props> = ({ product, related }) => {

	return (
		<>
			<SEO
				desc={ product.description }
				title={ `BitWine - ${ product.name }` }
				url={ `https://bitwine-client.herokuapp.com/product/${ product.slug }` }
				urlImage={ `https://bitwine-server.herokuapp.com/images/products/${ product.image }` }
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

interface Params extends ParsedUrlQuery {
	slug: string
}
export const getServerSideProps: GetServerSideProps<Props, Params> = async ( ctx ) => {

	const { slug } = ( ctx.params as Params )
	const { ok, product, related } = await getProductBySlug( slug )

	if( !ok ) {

		return {
			notFound: true
		}
	}

	return {
		props: {
			product,
			related
		}
	}
}

export default productPage
