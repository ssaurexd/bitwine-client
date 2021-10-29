import { FC, useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Dropzone, {
	DropzoneProps
} from 'react-dropzone'
import { Backup } from '@material-ui/icons'
import { Card, Typography } from '@material-ui/core'
import { Swiper, SwiperSlide } from 'swiper/react'

import useStyle from './styles'


interface Props extends DropzoneProps {
	imagePreview?: boolean,
	height?: number,
	error?: boolean
}

const CustomDropzone: FC<Props> = ( props ) => {

	const { 
		imagePreview = true,
		error = false, 
		height, 
		...rest 
	} = props

	/* hooks */
	const [ isDropping, setIsDropping ] = useState( false )
	const classes = useStyle({ height })
	
	/* funtions */

	return (
		<Dropzone
			{ ...rest }
			onDragEnter={ () => setIsDropping( true ) }
			onDragLeave={ () => setIsDropping( false ) }
			onDropAccepted={ () => setIsDropping( false ) }
			onDropRejected={ () => setIsDropping( false ) }
		>
			{({ getInputProps, getRootProps, acceptedFiles }) => (
				<>
					<section 
						{ ...getRootProps() } 
						className={ 
							clsx( classes.dropzone, { 
								[classes.isDropping]: isDropping,
								[classes.dropzoneError]: error
							})
						} 
					>
						<input { ...getInputProps() } />
						<Backup className={ classes.icon } />
						<Typography variant='subtitle2' color='textSecondary' >Drag and Drop</Typography>
						<Typography variant='subtitle2' color='textSecondary' >Or click to select</Typography>
					</section>

					{ error && <Typography variant='caption' color='error' >Campo obligatorio</Typography> }

					{ imagePreview && acceptedFiles.length > 0 &&

						<div >
							<Swiper 
								pagination={{
									dynamicBullets: true
								}}
								centeredSlides={ true }
								className={ classes.swiper }
							>
								{ acceptedFiles.map(( file, index ) => (

									<SwiperSlide key={`${ file.name }-${ index }`} className={ classes.swiperSlide } >
										<div className={ classes.imgContainer } >
											<Image className={ classes.preview } src={ URL.createObjectURL( file ) } alt={ file.name } objectFit='contain' />
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					}
					{ !imagePreview && acceptedFiles.length > 0 && 

						<div className={ classes.dropzoneCardContainer } >
							{ acceptedFiles.map(( file, index ) => (
								<Card key={`${ file.name }-${ index }`} className={ classes.card } >
									<Typography variant='subtitle2' color='textSecondary' >{ file.name }</Typography>
									<Typography variant='h6' color='textSecondary' > { file.type } - { file.size } bytes</Typography>
								</Card>
							))}
						</div>
					}
				</>
			)}
		</Dropzone>
	)
}

export default CustomDropzone
