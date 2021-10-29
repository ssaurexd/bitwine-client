import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Grid, Typography } from '@material-ui/core'

import useStyle from './styles'
import logoImage from '../../../public/assets/images/logo.png'


interface Props {
	isScrolling: boolean
}

const Logo: FC<Props> = ({ isScrolling }) => {

	const classes = useStyle({ isScrolling })

	return (
		<Link href='/' >
			<a className={ classes.logo } >
				<Grid container alignItems='center' wrap='nowrap' justifyContent='flex-start' >
					<Grid item xs={ 6 } sm={ 4 } md={ 3 } lg={ 3 } >
						<Image 
							src={ logoImage }
							layout='responsive'
							objectFit='contain'
							alt='Logo'
						/> 
					</Grid>
					<Grid item xs={ 6 } sm={ 8 } md={ 9 } lg={ 9 } >
						<Typography variant='h2' color='inherit' >BitWine</Typography>		
					</Grid>
				</Grid>
			</a>
		</Link>
	)
}

export default Logo
