import { FC } from 'react'
import Link from 'next/link'
import {
	Container,
	List,
	ListItem,
	Typography
} from '@material-ui/core'


const FooterMain: FC = () => {

	return (
		<footer className='footer-main' >
			<Container>
				<div className="footer-main__container">
					<section className='description' >
						<Typography variant='h5' color='initial' >BitWine</Typography>		
						<Typography variant='body2'>
							Best market place to buy wines
						</Typography>
					</section>
					<section className="about">
						<Typography variant='h6' >Acerca de nosotros</Typography>	
						<List>
							<ListItem>
								<Link href='/about' >
									<a className='footer-link' >
										¿Quienes somos?
									</a>
								</Link>
							</ListItem>

							<ListItem>
								<Link href='/about' >
									<a className='footer-link' >
										Terminos y Condiciones
									</a>
								</Link>
							</ListItem>

							<ListItem>
								<Link href='/about' >
									<a className='footer-link' >
										Privacidad y Politicas
									</a>
								</Link>
							</ListItem>
						</List>
					</section>

					<section className="customer-care">
						<Typography variant='h6' >Seguridad con nuestos clientes</Typography>

						<List>
							<ListItem>
								<Link href='/about' >
									<a className='footer-link' >
										Centro de ayuda
									</a>
								</Link>
							</ListItem>

							<ListItem>
								<Link href='/about' >
									<a className='footer-link' >
										Reclamos y Reembolsos
									</a>
								</Link>
							</ListItem>

							<ListItem>
								<Link href='/about' >
									<a className='footer-link' >
										¿Como comprar?
									</a>
								</Link>
							</ListItem>
						</List>
					</section>

					<section className="contact">
						<Typography variant='h6' >Contacto</Typography>

						<List>
							<ListItem>
								<Typography variant='body2' >
									Heroes de padierna, Tulum 455, Tlalpan CDMX
								</Typography>
							</ListItem>

							<ListItem>
								<Typography variant='body2' >
									Email: contact@bitwine.com
								</Typography>
							</ListItem>

							<ListItem>
								<Typography variant='body2' >
									Tel: 4667236663
								</Typography>
							</ListItem>
						</List>
					</section>
				</div>
			</Container>
		</footer>
	)
}

export default FooterMain
