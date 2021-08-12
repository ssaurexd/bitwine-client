import Auth from '../components/init/Auth'
import Login from '../components/screens/Login'
import HeaderMain from '../components/HeaderMain'
import FooterMain from '../components/FooterMain'
import Layout from '../components/init/Layout'


const login = ( ) => {

	return (
		<Auth
			admitedRoles={ ['guest'] }
			redirectTo='/'
		>
			<Layout>
				<main className='login-main' >
					{/* <HeaderMain 
						title='Iniciar sesión'
						subTitle='Unete al más grande tienda en linea para los amantes del vino'
					/> */}
					<Login />
				</main>
			</Layout>
		</Auth>
	)
}

export default login
