import { FC, useState, useEffect } from 'react'
import { 
	Container, 
	Paper, 
	Typography,
	Dialog,
	AppBar,
	Toolbar,
	IconButton,
	List,
	ListItem,
	Divider,
	ListItemText,
	Button
} from '@material-ui/core'
import {
	Close
} from '@material-ui/icons'
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@material-ui/data-grid'

import { IProduct } from '../../../../interfaces/productInterfaces'
import { getAllProducts } from '../../../../api/productApi'
import { productSchema } from './schema'
import useStyle from './styles'


const ListProduct: FC = () => {

	/* hooks */
	const classes = useStyle()
	const [ data, setData ] = useState<IProduct[]>( [] )
	const [ loading, setLoading ] = useState( false )
	const [ open, setOpen ] = useState( false )

	/* funtions */
	const getData = async () => {
		
		setLoading( true )
		const { ok, products } = await getAllProducts()

		if( ok ) {

			setData( products )
			setLoading( false )
		} else {

			setLoading( false )
		}
	}

	useEffect( () => {

		getData()
	}, [ ])

	return (
		<Container>
			<Typography variant='subtitle1' className={ classes.title } align='center' color='textPrimary'>Productos: </Typography>
			
			<Paper className={ classes.dataGrid } >
				<DataGrid
					loading={ loading }
					columns={ productSchema }
					rows={ data }
					pageSize={ 9 }
					rowsPerPageOptions={ [9] }
					autoHeight
					density='comfortable'
					getRowId={ rows => rows._id }
					components={{
						Toolbar: () => (
							<GridToolbarContainer >
								<GridToolbarExport  
									variant='text'
								/>
							</GridToolbarContainer>
						)
					}}
					onRowClick={ item => setOpen( true ) }
				/> 
			</Paper>

			<Dialog fullScreen open={open} onClose={ () => setOpen( false ) }>
				<AppBar className={classes.appBar}>
					<Toolbar >
						<IconButton edge="start" color="inherit" onClick={ () => setOpen( false ) } aria-label="close">
							<Close />
						</IconButton>
						<Button color="inherit" disableElevation onClick={ () => {} }>
						save
						</Button>
					</Toolbar>
				</AppBar>
			</Dialog>
		</Container>
	)
}

export default ListProduct
