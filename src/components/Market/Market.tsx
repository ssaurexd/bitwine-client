import { useState, useEffect, FC, useRef, useCallback } from 'react'
import { NextPage } from 'next'
import useStyle from './styles'
import { 
	Box,
	Grid, 
	Paper, 
	Typography,
	Select,
	MenuItem,
	IconButton
} from '@material-ui/core'
import { ViewList, ViewModule } from '@material-ui/icons'
import { getProducts } from '../../api/productApi'
import { IProduct } from '../../interfaces/productInterfaces'
import { Pagination, Skeleton } from '@material-ui/lab'
import ProductCard from '../ProductCard'


interface Props {
}
const Market: FC<Props> = () => {

	/* hooks */
	const classes = useStyle()
	const [ products, setProducts ] = useState<IProduct[]>( [] )
	const [ isLoading, setIsLoading ] = useState( false )
	const [ totalPages, setTotalPages ] = useState( 0 )

	/* state */
	let limit = 13
	let pageIndex = useRef( 0 )

	/* funtions */
	const fetchProducts = useCallback( async ( page = 0 ) => {
		
		setIsLoading( true )
		pageIndex.current = page
	
		const { ok, products, total, next } = await getProducts( limit, page )
        console.log("🚀 ~ file: Market.tsx ~ line 46 ~ fetchProducts ~ products", products)
        console.log("🚀 ~ file: Market.tsx ~ line 48 ~ fetchProducts ~ next", next)

		if( ok ) {

			setProducts( products )
			setTotalPages( Math.ceil( total / limit ) )
			setIsLoading( false )
		}
	}, [ limit ])

	/* efects */
	useEffect( () => {

		fetchProducts()
	}, [ fetchProducts ])

	return (
		<section className={ classes.marketRoot } >
			<Grid container >
				<Grid item xs={ 12 } >
					<Paper className={ classes.sortPaper } >
						<Box>
							<Typography> LAbel sort </Typography>
							<Typography variant='caption' color='textSecondary' >45 results</Typography>
						</Box>
						<Box >
							<Select
								value=''
								variant='outlined'
								color='primary'
							>
								<MenuItem value='' disabled >Seleccionar</MenuItem>
							</Select>
							<IconButton
								color='primary'
							>
								<ViewModule />
							</IconButton>
							<IconButton
								color='primary'
							>
								<ViewList />
							</IconButton>
						</Box>
					</Paper>
				</Grid>

				<Grid 
					className={ classes.mt }
					container 
					item  
					xs={ 12 } 
				>
					<Grid item className={ classes.mr } xs={ 12 } lg={ 3 } >
						<Paper className={ classes.sortPaper } >

						</Paper>
					</Grid>
					<Grid item xs={ 12 } lg={ 9 } >
						<div className={ classes.productPaper } >
							{ products.map( item => {

								if( isLoading ) {

									return (
										<Skeleton />
									)
								}

								return (
									<ProductCard key={ item._id } product={ item } />
								)
							})}
						</div>
					</Grid>
				</Grid>

				<Grid item container justifyContent='flex-end' >
					<Pagination variant='text' count={ totalPages } page={ pageIndex.current + 1 } color='primary' onChange={ ( e, page ) => fetchProducts( page )  } />
				</Grid>
			</Grid>
		</section>
	)
}

export default Market