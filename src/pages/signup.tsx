import Auth from '../components/init/Auth'
import Layout from '../components/init/Layout'
import SignupForm from '../components/SignupForm'


const Signup = () => {

	return (
		<Auth
			admitedRoles={ ['guest'] }
			redirectTo='/'
		>
			<Layout haveHeader >
				<main className='login-main' >
					<SignupForm />
				</main>
			</Layout>
		</Auth>
	)
}

export default Signup