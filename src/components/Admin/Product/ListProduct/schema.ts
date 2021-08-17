import { GridColDef, GridValueFormatterParams } from '@material-ui/data-grid'
import { ICategory } from '../../../../interfaces/categoryInterfaces'
import { IProduct } from '../../../../interfaces/productInterfaces'


export const productSchema: GridColDef[] = [
	{
		field: '_id',
		headerName: 'ID',
		minWidth: 200,
		hide: true
	},
	{ 
		field: 'name', 
		headerName: 'PRODUCTO', 
		width: 300
	},
	{ 
		field: 'onStock', 
		headerName: 'DISPONIBLES',
		minWidth: 180,
		type: 'number'
	},
	{ 
		field: 'price', 
		headerName: 'PRECIO',
		minWidth: 200,
		type: 'number'
	},
	{ 
		field: 'discount', 
		headerName: 'DESCUENTO',
		minWidth: 200,
		type: 'number',
		valueFormatter: ({ value }) => {

			return `${ value }%` 
		}
	},
	{ 
		field: 'priceWithDiscount', 
		headerName: 'PRECIO TOTAL',
		minWidth: 200,
		type: 'number'
	},
	{ 
		field: 'categories', 
		headerName: 'CATEGORIA',
		minWidth: 300,
		valueFormatter: ( { value }: GridValueFormatterParams ) => {

			const categories = value as ICategory[]
			const values = categories.map( cat => cat.name )

			return values.join( ' / ' )
		}
	},
	{ 
		field: 'description', 
		headerName: 'DESCRIPCION',
		minWidth: 200,
		hide: true,
	},
	{ 
		field: 'slug', 
		headerName: 'SLUG',
		minWidth: 200,
		hide: true,
	},
	{ 
		field: 'createdAt', 
		headerName: 'FECHA DE CREACION',
		minWidth: 200,
		valueFormatter: ( { value }: GridValueFormatterParams ) => {

			const date = new Date( value as string )

			return date.toLocaleString()
		}
	}
]