import { ChangeEvent, FC, useState } from 'react'
import {
	Grid, 
	Paper,
	TextField,
	Typography,
	Select,
	MenuItem,
	Button
} from '@material-ui/core'
import { Formik } from 'formik'

import useStyle from './styles'
import { ICategory } from '../../../../interfaces/categoryInterfaces'


interface IProductValues {
	name: string,
	description: string,
	price: number,
	categories: string[],
	image: string,
	priceWithDiscount: number,
	discount: number
}
interface ICategoryValues {
	category: string
}
interface Props {
	categories: ICategory[]
}

const CreateProduct: FC<Props> = ({ categories }) => {

	const classes = useStyle()
	const [ initialValuesProduct, setInitialValuesProduct ] = useState<IProductValues>({
		categories: [],
		description: '',
		image: '',
		name: '',
		price: 0,
		priceWithDiscount: 0,
		discount: 0
	})
	const [ initialValuesCategory, setInitialValuesCategory ] = useState('')

	/* funtions */
	const handleSubmitProduct = () => {
   		console.log("🚀 ~ file: CreateProduct.tsx ~ line 41 ~ handleSubmit ~ values", { x: initialValuesProduct, y: initialValuesCategory })
	}
	const handleChange2 = ( values: string ) => { 
		setInitialValuesCategory( values ) 
	}

	return (
		<main>
			<Grid container spacing={ 3 } >
				<Grid container item xs={ 12 } justify='space-between' alignItems='center'>
					<Grid item >
						<Typography variant='subtitle1' className={ classes.title } color='textPrimary'>Crear nuevo producto: </Typography>
					</Grid>
					<Grid item xs={ 12 }  md={ 2 } >
						<Button
							variant='contained'
							color='secondary'
							onClick={ handleSubmitProduct }
							fullWidth
							disableElevation
						>
							Crear
						</Button>
					</Grid>
				</Grid>
				<Grid item container spacing={ 3 }  >
					<Grid item md={ 8 } lg={ 9 } >
						<Paper className={ classes.paper } >
							<Formik
								initialValues={ initialValuesProduct }
								onSubmit={ ( values ) => {} }
							>
								{ ({ values, handleChange }) => (
									<form >
										<Typography variant='subtitle2' className={ classes.subTitle } color='textSecondary'>Producto: </Typography>
										<Grid container >
											<Grid container item spacing={ 3 } >
												<Grid item xs={ 12 } >
													<TextField 
														label='Nombre'
														variant='outlined'
														value={ values.name }
														name='name'
														size='small'
														onChange={ handleChange }
														fullWidth
														color='secondary'
													/>
												</Grid>
												<Grid item xs={ 12 } md={ 4 } >
													<TextField 
														label='Precio'
														variant='outlined'
														value={ values.price }
														type='number'
														name='price'
														size='small'
														onChange={ handleChange }
														fullWidth
														color='secondary'
													/>
												</Grid>
												<Grid item xs={ 12 } md={ 4 } >
													<TextField 
														label='Descuento ( % )'
														variant='outlined'
														value={ values.discount }
														type='number'
														name='discount'
														size='small'
														onChange={ handleChange }
														fullWidth
														color='secondary'
													/>
												</Grid>
												<Grid item xs={ 12 } md={ 4 } >
													<TextField 
														label='Precio con descuento'
														variant='outlined'
														value={ values.priceWithDiscount }
														type='number'
														name='price'
														size='small'
														onChange={ handleChange }
														fullWidth
														color='secondary'
													/>
												</Grid>
												<Grid item xs={ 12 } >
													<TextField 
														multiline
														label='Descripción'
														variant='outlined'
														value={ values.description }
														name='description'
														size='small'
														onChange={ handleChange }
														fullWidth
														rows={ 10 }
														color='secondary'
													/>
												</Grid>
											</Grid>
										</Grid>
									</form>
								)}
							</Formik>
						</Paper>
					</Grid>
					<Grid container item xs={ 12 } md={ 4 } lg={ 3 } >
						<Grid container spacing={ 3 } item direction='column' >
							<Grid item >
								<Paper className={ classes.paper } >
									<Typography variant='subtitle2' className={ classes.subTitle } color='textSecondary'>Categoría: </Typography>
									<Select
										className={ classes.select }
										fullWidth
										variant='outlined'
										value={ initialValuesCategory }
										name='category'
										onChange={ ( e ) =>  handleChange2( e.target.value as string ) }
										color='secondary'
									>
										{ categories.map( category => (
											
											<MenuItem key={ category._id } value={ category._id } >{ category.name }</MenuItem>
										))}
									</Select>
								</Paper>
							</Grid>
							<Grid item >
								<Paper className={ classes.paper } >
									<Typography variant='subtitle2' className={ classes.subTitle } color='textSecondary'>Imagen para Card: </Typography>
									<input className={ classes.drop } type='file' onDrop={ ( e ) => console.log( 'aqui', e.currentTarget.value ) }  />
								</Paper>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</main>
	)
}

export default CreateProduct
