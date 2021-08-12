import { useRouter } from 'next/router'
import React from 'react'


const ProductPage = () => {

	/* hooks */
	const location = useRouter()
    console.log("🚀 ~ file: [slug].tsx ~ line 9 ~ ProductPage ~ location", location.query)

	return (
		<div>
			{ location.query.slug }
		</div>
	)
}

export default ProductPage
