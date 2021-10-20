import { FC, useState, useEffect } from 'react'
import { 
	IconButton,
	Dialog,
	DialogContent,
	DialogTitle,
	TextField,
	useMediaQuery,
	InputAdornment,
	Divider,
	CircularProgress,
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { Search, Send } from '@material-ui/icons'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import useStyle from './styles'


interface ISearchValues {
	query: string
}
interface PropsDialog {
	open: boolean,
	onClose: () => void
}
interface Props {
	onMobile?: boolean
}

const CustomSearch: FC<Props> = ( props ) => {

	/* props */
	const {

	} = props

	/* hooks */
	const [ open, setOpen ] = useState( false )

	/* funtions */
	const handleOpen = () => {
		
		setOpen( true )
	}

	const handleClose = () => {
		
		setOpen( false )
	}
	return (
		<div>
			<IconButton
				color='inherit'
				onClick={ handleOpen }
			>
				<Search fontSize='medium'/>
			</IconButton>

			<CustomDialogSearch onClose={ handleClose } open={ open } />
		</div>
	)
}


const CustomDialogSearch: FC<PropsDialog> = ({ onClose, open }) => {

	/* hooks */
	const theme = useTheme()
  	const isSmall = useMediaQuery( theme.breakpoints.down('xs') )
	const classes = useStyle({})
	const [ products, setProducts ] = useState<any>( [] )
	const [ isLoading, setIsLoading ] = useState( false )
	const [ msg, setMsg ] = useState( 'Buscar algo' )
	const {
		values,
		errors,
		handleChange,
		handleSubmit,
		resetForm
	} = useFormik({
		initialValues: {
			search: ''
		},
		onSubmit: () => _onSubmit(),
		validationSchema: Yup.object({
			search: Yup.string().trim().required('Ingresa un texto')
		})
	})

	/* funtions */
	const handleClose = () => {
		resetForm()
		onClose()
	}
	
	const _onSubmit = async ( ) => {

		setIsLoading( true )
		setTimeout( () => {

			setProducts([
			])
			if( products.length > 0 ) setMsg('')
			else setMsg( 'No hay resultados' )
			setIsLoading( false )
		}, 5000)
	}

	return (
		<Dialog
			open={ open }
			onClose={ handleClose }
			fullWidth={ true }
			maxWidth={ isSmall ? 'xl' : 'sm' }
			classes={{
				scrollPaper: classes.paperDialog
			}}
		>
			<form onSubmit={ handleSubmit } >
				<DialogTitle>
					<TextField 
						label='Buscar'
						placeholder='Vino rosa...'
						name='search'
						size='small'
						fullWidth
						InputProps={{
							startAdornment: <InputAdornment position='start'><Search color='primary' /></InputAdornment>,
							endAdornment: <IconButton type='submit' ><Send color='primary' /></IconButton>
						}}
						helperText={ errors.search }
						error={ errors.search ? true : false }
						value={ values.search }
						onChange={ handleChange }
					/>
				</DialogTitle>
				<DialogContent dividers className={ classes.dialogContent } >
					{ isLoading && <CircularProgress color='primary' size={ 30 } /> }
					{ !isLoading && products.map(( item: any, i: number ) => (
						<div key={ i } >{item.name}</div>
					))}
					{ !isLoading && products.length === 0 && <span>{ msg }</span> }
				</DialogContent>
			</form>
		</Dialog>
	)
}

export default CustomSearch
