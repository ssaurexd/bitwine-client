import { FC, FormEvent, useState } from 'react'
import {
	Grid, 
	Paper,
	TextField,
	Typography,
	Select,
	MenuItem,
	Button,
	Container,
	CircularProgress,
	Chip,
	FormControl,
	FormHelperText
} from '@material-ui/core'
import { useRouter } from 'next/router'
import clsx from 'clsx'
 
import useStyle from './styles'
import { ICategory } from '../../../../interfaces/categoryInterfaces'
import useProductForm from '../../../../hooks/useProductForm'
import { createProduct, uploadProductImages } from '../../../../api/productApi'
import { useAppDispatch } from '../../../../hooks/reduxHooks'
import { openToast } from '../../../../redux/slices/appSlice'

import CustomDropzone from '../../../CustomDropzone'
import SunEditorRichText from '../../../SunEditorRichText'


interface Props {
	categories: ICategory[]
}

const CreateProduct: FC<Props> = ({ categories }) => {

	/* hooks */
	const classes = useStyle()
	const dispatch = useAppDispatch()
	const location = useRouter()
	const [ loading, setLoading ] = useState( false )
	const { values, errors, handleChange, validateFiels } = useProductForm({
		initialValues: {
			iName: '',
			iPrice: 0,
			iCategories: [],
			iDescription: '',
			iDiscount: 0,
			iImage: '',
			iImages: [],
			iPriceWithDiscount: 0,
			iOnStock: 0
		}
	})

	/* funtions */
	const _onSubmit = async ( e: FormEvent ) => {
		e.preventDefault()

		const haveErrors = validateFiels()

		if( !haveErrors ) {

			setLoading( true )
			
			/* subimos las imagene primero para obtener el path de las mismas */
			const { imagePath, imagesPath, msg, ok: okImg } = await uploadProductImages({ image: values.image, images: values.images })

			if( okImg ) {

				/* si ya estan los path de las imagenes ahora creamos el producto */
				const data = {
					...values,
					image: imagePath,
					images: imagesPath
				}
				const { ok, msg } = await createProduct( data )
	
				if( ok ) {
	
					dispatch( openToast({
						duration: 4000,
						isOpen: true,
						msg,
						severity: 'success'
					}))
					setLoading( false )
					location.push( '/admin' )
				} else {

					dispatch( openToast({
						duration: 4000,
						isOpen: true,
						msg: msg,
						severity: 'error'
					}))
				}
			} else {

				dispatch( openToast({
					duration: 4000,
					isOpen: true,
					msg: msg,
					severity: 'error'
				}))
				setLoading( false )
			}
		}
	}

	const getCategoryById = ( id: string ): ICategory => {

		const category = categories.find( cat => cat._id === id )

		return category!
	}

	return (
		<Container >
			<Typography variant='subtitle1' className={ classes.title } align='center' color='textPrimary'>Crear nuevo producto: </Typography>
			<form onSubmit={ _onSubmit } encType='multipart/form-data' method='post' >
				<Grid container spacing={ 3 } justify='center'>
					<Grid item container spacing={ 3 } xs={ 12 } md={ 7 } lg={ 8 }  >
						{/* product form */}
						<Grid item >
							<Paper className={ classes.paper } >
								<Typography variant='subtitle2' className={ classes.subTitle } color='textSecondary'>Producto: </Typography>
								<Grid container >
									<Grid container item spacing={ 3 } >
										<Grid item xs={ 12 } >
											<TextField 
												label='Nombre'
												name='name'
												fullWidth
												color='secondary'
												value={ values.name }
												helperText={ errors.name }
												error={ errors.name ? true : false }
												onChange={ ( e ) => handleChange.handleName( e.target.value ) }
											/>
										</Grid>
										<Grid item xs={ 12 } md={ 4 } >
											<TextField 
												label='Precio'
												type='number'
												name='price'
												fullWidth
												color='secondary'
												value={ values.price }
												onChange={ e => handleChange.handlePrice( e.target.value ) }
											/>
										</Grid>
										<Grid item xs={ 12 } md={ 4 } >
											<TextField 
												label='Descuento ( % )'
												type='number'
												name='discount'
												fullWidth
												color='secondary'
												value={ values.discount }
												onChange={ e => handleChange.handleDiscount( e.target.value ) }
											/>
										</Grid>
										<Grid item xs={ 12 } md={ 4 } >
											<TextField 
												label='Precio final'
												name='priceWithDiscount'
												type='number'
												fullWidth
												color='secondary'
												disabled
												helperText={ errors.priceWithDiscount }
												error={ errors.priceWithDiscount ? true : false }
												value={ values.priceWithDiscount }
												onChange={ e => handleChange.handlePriceWithDiscount( e.target.value ) }
											/>
										</Grid>
									</Grid>
								</Grid>
							</Paper>
						</Grid>

						{/* descripcion */}
						<Grid item xs={ 12 } >
							<Paper className={ classes.paper } >
								<Typography variant='subtitle2' className={ classes.subTitle } color='textSecondary'>Descripción: </Typography>
								<FormControl className={ classes.description } error={ errors.description ? true : false } >
									<SunEditorRichText 
										defaultValue={ values.description }
										onChange={ value => handleChange.handleDescription( value ) }
									/>
									<FormHelperText>{ errors.description }</FormHelperText>
								</FormControl>
							</Paper>
						</Grid>

						{/* images */}
						<Grid item xs={ 12 } >
							<Paper className={ classes.paper } >
								<Typography variant='subtitle2' className={ classes.subTitle } color='textSecondary'>Imagenes: </Typography>
								<CustomDropzone 
									onDrop={ ( item ) => handleChange.handleImages( item ) }
									maxFiles={ 7 }
									accept='image/*'
									error={ errors.images ? true : false }
								/>
							</Paper>
						</Grid>
					</Grid>

					{/* category - image */}
					<Grid container item justify='center' direction='column' spacing={ 3 } xs={ 12 } md={ 3 } lg={ 4 } >
						<Grid item >
							<Paper className={ classes.paper } >
								<Typography variant='subtitle2' className={ classes.subTitle } color='textSecondary'>Categoría: </Typography>
								<FormControl 
									className={
										clsx(classes.select, {
											[classes.selectSmall]: values.categories.length > 0 ? false : true
										})
									} 
									error={ errors.categories ? true : false }
								>
									<Select
										className={
											clsx(classes.select, {
												[classes.selectSmall]: values.categories.length > 0 ? false : true
											})
										}
										fullWidth
										variant='outlined'
										name='categories'
										color='secondary'
										value={ values.categories }
										multiple
										onChange={ e => handleChange.handleCategories( e.target.value ) }
										renderValue={( selected ) => (
											<div className={ classes.chips }>
												{( selected as string[] ).map( value => (
													
													<Chip key={ getCategoryById( value )._id } label={ getCategoryById( value ).name } className={ classes.chip } />
												))}
											</div>
										)}
									>
										{ categories.map( category => (
											
											<MenuItem key={ category._id } value={ category._id } >{ category.name }</MenuItem>
										))}
									</Select>
									<FormHelperText>{ errors.categories }</FormHelperText>
								</FormControl>
							</Paper>
						</Grid>
						<Grid item >
							<Paper className={ classes.paper } >
								<Typography variant='subtitle2' className={ classes.subTitle } color='textSecondary'>Inventario: </Typography>
								<TextField 
									label='Cantidad disponible'
									type='number'
									name='onStock'
									fullWidth
									color='secondary'
									helperText={ errors.onStock }
									error={ errors.onStock ? true : false }
									value={ values.onStock }
									onChange={ e => handleChange.handleOnStock( e.target.value ) }
								/>
							</Paper>
						</Grid>
						<Grid item >
							<Paper className={ classes.paper } >
								<Typography variant='subtitle2' className={ classes.subTitle } color='textSecondary'>Imagen Card: </Typography>
								<CustomDropzone 
									onDrop={ ( item ) => handleChange.handleImage( item ) }
									maxFiles={ 1 }
									accept='image/*'
									error={ errors.image ? true : false }
								/>
							</Paper>
						</Grid>
						<Grid item xs >
							<div className={ classes.btnWrapper }>
								<Button
									variant='contained'
									color='secondary'
									fullWidth
									disableElevation
									disabled={ loading }
									type='submit'
								>
									Crear
								</Button>
								{ loading && <CircularProgress size={ 24 } color='inherit' className={ classes.btnProgress } /> }
							</div>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</Container>
	)
}

export default CreateProduct
