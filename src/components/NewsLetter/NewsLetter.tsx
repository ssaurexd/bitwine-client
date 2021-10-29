import { Button, Container, Typography } from '@material-ui/core'
import { Email, Send } from '@material-ui/icons'
import { useFormik } from 'formik'
import { FC } from 'react'

import useStyle from './styles'


const NewsLetter: FC = () => {
	
	/* hooks */
	const classes = useStyle()
	const formik = useFormik({
		initialValues: {
			email: ''
		},
		onSubmit: () => console.log('Hice submit')
	})

	return (
		<section className={ classes.root } >
			<Container>
				<div className={ classes.iconContainer } >
					<Email fontSize='inherit' />
				</div>
				<Typography variant='h4' align='center' >SUBSCRIBE</Typography>
				<Typography align='center' >Subscribete a nuestro news letter y mantente actualizado con todas las ofertas y productos. </Typography>
				<form onSubmit={ formik.handleSubmit } >

					<Button type='submit' color='inherit' >Enviar</Button>
				</form>
			</Container>
		</section>
	)
}

export default NewsLetter
