import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
	Container,
	Divider,
	Grid,
	List,
	ListItem,
	Typography
} from '@material-ui/core'
import { 
	Facebook,
	Instagram,
	Twitter
} from '@material-ui/icons'


const FooterMain: FC = () => {

	const currentYear = new Date().getFullYear()

	return (
		<footer className='footer-main' >
			<Container>
				<div className="footer-main__container">
					<section className='description' >
						<Grid container direction='column' spacing={ 2 } >
							<Grid item >
								<Typography variant='h5' color='initial' >BitWine</Typography>		
								<Typography variant='body2'>
									El mejor lugar para comprar vino
								</Typography>
							</Grid>

							<Grid item container spacing={ 1 } >
								<Grid item >
									<Link href='/about' >
										<a className='footer-link' >
											<Facebook />
										</a>
									</Link>
								</Grid>
								<Grid item >
									<Link href='/about' >
										<a className='footer-link' >
											<Instagram />
										</a>
									</Link>
								</Grid>
								<Grid item >
									<Link href='/about' >
										<a className='footer-link' >
											<Twitter />
										</a>
									</Link>
								</Grid>
							</Grid>
						</Grid>
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

				<Divider variant='middle' className='footer-main__divider' />

				<div className='footer-main__rights'>
					<Grid container justifyContent='space-between' alignItems='center'>
						<Grid item sm={ 6 } >
							<Typography variant='body2' >
								All rights reserverd BitWines { currentYear }
							</Typography>
						</Grid>
						<Grid container item spacing={ 1 } xs={ 12 } sm={ 6 } justifyContent='flex-end' wrap='nowrap' >
							<Grid item >
								<Image 
									src='https://www.thewineshops.com/media/wysiwyg/cms/i/c/icon-amex.svg'
									width={ 50 }
									height={ 50 }
									alt='footer img1'
								/>
							</Grid>
							<Grid item >
								<Image 
									src='https://www.thewineshops.com/media/wysiwyg/cms/i/c/icon-mastercard.svg'
									width={ 50 }
									height={ 50 }
									alt='footer img2'
								/>
							</Grid>
							<Grid item >
								<Image 
									src='https://www.thewineshops.com/media/wysiwyg/cms/i/c/icon-visa.svg'
									width={ 50 }
									height={ 50 }
									alt='footer img3'
								/>
							</Grid>
							<Grid item >
								<Image 
									src='https://www.thewineshops.com/media/wysiwyg/cms/i/c/icon-secure.svg'
									width={ 50 }
									height={ 50 }
									alt='footer img4'
								/>
							</Grid>
							<Grid item >
								<Image 
									src='https://www.thewineshops.com/media/wysiwyg/cms/i/c/icon-privacy.svg'
									width={ 50 }
									height={ 50 }
									alt='footer img5'
								/>
							</Grid>
						</Grid>
					</Grid>
				</div>
			</Container>
		</footer>
	)
}

export default FooterMain
