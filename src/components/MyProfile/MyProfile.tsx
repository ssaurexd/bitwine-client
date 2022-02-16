import { ChangeEvent, FC, useRef, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { AddAPhoto } from '@material-ui/icons'
import { TextField } from '@material-ui/core'

import { getLinkImage } from '../../helpers/helpers'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { updateUserProfile, uploadUserAvatar } from '../../api/userApi'
import { setUserAvatar } from '../../redux/slices/userSlice'
import { openToast } from '../../redux/slices/appSlice'
import useStyle from './styles'

import Btn from '../Btn'


interface Props {
	
}
interface IFormikValues {
	name: string,
	lastName: string
}
const MyProfile: FC<Props> = () => {

	/* state */
	const user = useAppSelector( state => state.user )
	const [ avatar, setAvatar ] = useState<string>( user.avatar ? getLinkImage( user.avatar ) : '/assets/images/defaultAvatar.png' )
	const [ isLoading, setIsLoading ] = useState( false )

	/* hooks */
	const avatarRef = useRef<HTMLInputElement|null>( null )
	const classes = useStyle()
	const dispatch = useAppDispatch()
	const formik = useFormik<IFormikValues>({
		initialValues: {
			lastName: user.lastName,
			name: user.name
		},
		validationSchema: Yup.object({
			lastName: Yup.string().required('Campo obligatorio'),
			name: Yup.string().required('Campo obligatorio')
		}),
		onSubmit: values => handleSubmit( values )
	})
	
	/* funtions */
	const handleAvatarClick = (  ) => {
		
		avatarRef.current?.click()
	}

	const handleFileChange = ( e: ChangeEvent<HTMLInputElement>  ) => {
		( e.target.files?.length ) && setAvatar( URL.createObjectURL( e.target.files[0] ) )
	}

	const handleSubmit = async ( values: IFormikValues ) => {

		setIsLoading( true )

		if( avatarRef.current?.files?.item(0) ) {

			const { ok: imgOk, imagePath, msg } = await uploadUserAvatar( avatarRef.current?.files )
			
			if( imgOk ) {
				
				dispatch( setUserAvatar({ imagePath }) )
			} else {
				
				setIsLoading( false )
				dispatch( openToast({
					isOpen: true,
					msg,
					duration: 2000,
					severity: 'error'
				}))
				return
			}
		}

		const { ok, msg } = await updateUserProfile( values )

		if( ok ) {

			setIsLoading( false )
			dispatch( openToast({
				isOpen: true,
				msg: 'Perfil Actualizado',
				duration: 2000,
				severity: 'success'
			}))
			return
		}

		setIsLoading( false )
		dispatch( openToast({
			isOpen: true,
			msg,
			duration: 2000,
			severity: 'error'
		}))
	}

	return (
		<div className={ classes.root } >
			<div className={ classes.avatarContainer }  >
				<input 
					type="file" 
					ref={ avatarRef } 
					max={ 1 }
					hidden 
					accept='.jpg,.png,.jpeg' 
					onChange={ handleFileChange }
				/>
				<img src={ avatar } alt="Avatar"  className={ classes.avatar }/>
				<div className={ classes.iconContainer } >
					<AddAPhoto onClick={ handleAvatarClick } fontSize='large' />
				</div>
			</div>
			<form onSubmit={ formik.handleSubmit } className={ classes.inputContainer } encType='multipart/form-data' autoComplete='off' >
				<TextField 
					value={ formik.values.name }
					helperText={ formik.touched.name && formik.errors.name }
					error={ formik.touched.name && formik.errors.name ? true : false }
					name='name'
					fullWidth
					margin='dense'
					label='Nombre'
					onChange={ formik.handleChange }
				/>
				<TextField 
					value={ formik.values.lastName }
					helperText={ formik.touched.lastName && formik.errors.lastName }
					error={ formik.touched.lastName && formik.errors.lastName ? true : false }
					name='lastName'
					fullWidth
					margin='dense'
					label='Apellidos'
					onChange={ formik.handleChange }
				/>
				<TextField 
					value={ user.email }
					name='email'
					fullWidth
					margin='dense'
					label='Email'
					disabled
				/>
				<div className={ classes.submitContainer } >
					<Btn 
						title='Guardar'
						variant='contained'
						color='primary'
						isLoading={ isLoading }
						fullWidth
						type='submit'
					/>
				</div>
			</form>
		</div>
	)
}

export default MyProfile