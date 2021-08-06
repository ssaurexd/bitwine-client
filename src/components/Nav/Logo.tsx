import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Grid, Typography } from '@material-ui/core'

import useStyle from './styles'
import logoImage from '../../../public/assets/images/logo.png'


interface Props {
	transparent: boolean
}

const Logo: FC<Props> = ({ transparent }) => {

	const classes = useStyle()

	return (
		<Link href='/' >
			<a className={`${ classes.logo } ${ transparent && classes.colorWhite }`} >
				<Grid container alignItems='center' wrap='nowrap' justify='flex-start' >
					<Grid item xs={ 6 } sm={ 4 } md={ 3 } lg={ 3 } >
						<Image 
							src={ logoImage }
							layout='responsive'
							objectFit='contain'
						/> 
					</Grid>
					<Grid item xs={ 6 } sm={ 8 } md={ 9 } lg={ 9 } >
						<Typography variant='h2'>BitWine</Typography>		
					</Grid>
				</Grid>
			</a>
		</Link>
	)
}

export default Logo
