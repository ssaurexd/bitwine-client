import { FC } from 'react'
import { Container, Typography } from '@material-ui/core'

import WhyChooseUsCard from './WhyChooseUsCard'


const WhyChooseUs: FC = () => {
	
	return (
		<section className='why-choose-us-main' >
			<Container>
				<Typography variant='h3' align='center' >
					¿Por qué elegirnos?
				</Typography>

				<div className='why-choose-us-main__cards-container'>
					<WhyChooseUsCard 
						icon='CardMembership' 
						title='Unete al club'
						desc='Ofertas exclusivas para la comunidad de BitWine, unete a nuestro newsletter'
					/>
					<WhyChooseUsCard 
						icon='Security' 
						title='Seguridad'
						desc='Pagos con tarjetas de credito/debito o paypal son totalmente seguros'
					/>
					<WhyChooseUsCard 
						icon='LocalShipping' 
						title='Envios gratis'
						desc='A todo México en compras apartir de $2500, tu envio es gratis. #QuedateEnCasa'
					/>
					<WhyChooseUsCard 
						icon='TimeToLeave'
						title='Clientes felices'
						desc='Tiempo de entrega garantizados, en 3 a 5 dias habiles'
					/>
				</div>
			</Container>
		</section>
	)
}

export default WhyChooseUs
