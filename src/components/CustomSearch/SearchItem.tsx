import { FC } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { 
	Divider,
	IconButton,
	Typography 
} from '@material-ui/core'
import { ArrowForwardIos } from '@material-ui/icons'

import { ISearchItem } from '../../interfaces/productInterfaces'
import useStyle from './styles'
import { getLinkImage } from '../../helpers/helpers'


interface Props {
	item: ISearchItem,
	onCloseSearch: () => void
}
const SearchItem: FC<Props> = ({ item: { name, slug, img, categories }, onCloseSearch }) => {

	/* hooks */
	const classes = useStyle()
	const location = useRouter()

	/* funtions */
	const handleGoTo = () => { 

		onCloseSearch()
		location.push( `/product/${ slug }` ) 
	}

	return (
		<>
			<div className={ classes.searchItemContainer } >
				<div className={ classes.container } >
					<div className={ classes.imgItemContainer } >
						<Image 
							src={ getLinkImage( img ) }
							objectFit='contain'
							width={ 30 }
							height={ 30 }
						/>
					</div>

					<div className={ classes.infoContainer } >
						<Typography variant='body2' >{ name }</Typography>
						<div>
							{ categories.map(( category, i ) => (
								<Typography key={ category._id } variant='caption' color='textSecondary' >
									{ category.name } <span>{ i !== categories.length - 1 ? ' / ' : '' }</span>
								</Typography> 
							))}
							{console.log("🚀 ~ file: SearchItem.tsx ~ line 52 ~ categories", categories)}
						</div>

					</div>
				</div>

				<IconButton
					onClick={ handleGoTo }
					size='small'
				>
					<ArrowForwardIos fontSize='medium' color='inherit' />
				</IconButton>
			</div>
			<Divider />
		</>
	)
}

export default SearchItem