import { FC, useState } from 'react'
import { useFormik, Formik } from 'formik'
import * as Yup from 'yup'
import { 
	TextField 
} from '@material-ui/core'

import useStyle from '../MyProfile/styles'
import { changeUserPassword } from '../../api/userApi'
import { useAppDispatch } from '../../hooks/reduxHooks'

import Btn from '../Btn'
import { openToast } from '../../redux/slices/appSlice'


interface IFormValues {
	oldPassword: string,
	newPassword: string,
	repeatNewPassword: string
}
interface Props {
	
}
const ChangePassword: FC<Props> = () => {

	/* state */
	const [ isLoading, setIsLoading ] = useState( false )

	/* hooks */
	const dispatch = useAppDispatch()
	const classes = useStyle()
	const {
		values,
		errors,
		touched,
		handleSubmit,
		handleChange,
		setFieldError,
		resetForm
	} = useFormik<IFormValues>({
		initialValues: {
			oldPassword: '',
			newPassword: '',
			repeatNewPassword: ''
		},
		validationSchema: Yup.object({
			oldPassword: Yup.string().required('Campo requerido'),
			newPassword: Yup.string().required('Campo requerido'),	
			repeatNewPassword: Yup.string().required('Campo requerido').oneOf([ Yup.ref('newPassword'), null ], 'Las contraseñas deben ser iguales')
		}),
		onSubmit: values => _onSubmit( values )
	})

	/* functions */
	const _onSubmit = async ( { newPassword, oldPassword }: IFormValues ) => {

		setIsLoading( true )

		const { ok, msg, errorCode } = await changeUserPassword({ oldPassword, newPassword })

		if( !ok && errorCode ) {

			setIsLoading( false )

			if( errorCode === 'E401' ) {
				setFieldError( 'oldPassword', msg )
			}

			return
		}

		setIsLoading( false )
		resetForm()
		dispatch( openToast({
			isOpen: true,
			duration: 3000,
			msg,
			severity: 'success'
		}))
	}

	return (
		<form className={ classes.inputContainer } onSubmit={ handleSubmit } >
			<TextField 
				value={ values.oldPassword }
				helperText={ touched.oldPassword && errors.oldPassword && errors.oldPassword }
				error={ touched.oldPassword && errors.oldPassword ? true : false }
				name='oldPassword'
				type='password'
				fullWidth
				margin='dense'
				label='Contraseña actual'
				onChange={ handleChange }
			/>
			<TextField 
				value={ values.newPassword }
				helperText={ touched.newPassword && errors.newPassword && errors.newPassword }
				error={ touched.newPassword && errors.newPassword ? true : false }
				name='newPassword'
				type='password'
				fullWidth
				margin='dense'
				label='Contraseña nueva'
				onChange={ handleChange }
			/>
			<TextField 
				value={ values.repeatNewPassword }
				helperText={ touched.repeatNewPassword && errors.repeatNewPassword && errors.repeatNewPassword }
				error={ touched.repeatNewPassword && errors.repeatNewPassword ? true : false }
				name='repeatNewPassword'
				type='password'
				fullWidth
				margin='dense'
				label='Repite contraseña nueva'
				onChange={ handleChange }
			/>
			<div className={ classes.submitContainer } >
				<Btn 
					title='Cambiar contraseña'
					variant='contained'
					color='primary'
					fullWidth
					isLoading={ isLoading }
					type='submit'
				/>
			</div>
		</form>
	)
}

export default ChangePassword