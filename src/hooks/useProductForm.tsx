import { FC, useEffect, useState } from 'react'


interface IProductForm {
	iName: string,
	iPrice: number,
	iDiscount: number,
	iOnStock: number,
	iPriceWithDiscount: number,
	iDescription: string,
	iCategories: string[],
	iImage: string,
	iImages: string[]
}
interface Props {
	initialValues: IProductForm
}

const useProductForm  = ( props: Props ) => {

	const {
		iCategories,
		iDescription,
		iDiscount,
		iImage,
		iName,
		iPrice,
		iPriceWithDiscount,
		iImages,
		iOnStock
	} = props.initialValues


	/* hooks */
	const [ name, setName ] = useState( iName )
	const [ price, setPrice ] = useState<number>( iPrice )
	const [ onStock, setOnStock ] = useState<number>( iOnStock )
	const [ discount, setDiscount ] = useState<number>( iDiscount )
	const [ priceWithDiscount, setPriceWithDiscount ] = useState<number>( iPriceWithDiscount )
	const [ description, setDescription ] = useState( iDescription )
	const [ categories, setCategories ] = useState( iCategories )
	const [ image, setImage ] = useState( iImage )
	const [ images, setImages ] = useState<string[]>( iImages )
	const [ errors, setErrors ] = useState({
		name: '',
		price: '',
		discount: '',
		priceWithDiscount: '',
		description: '',
		categories: '',
		image: '',
		images: '',
		onStock: ''
	})

	/* funtions */
	const handleName = ( value: string ) => {
		
		setName( value )
		setErrors({ ...errors, name: '' })
	}

	const handlePrice = ( value: string ) => {

		const valueFloat = parseFloat( value ) 

		if( !isNaN( valueFloat ) ) {

			const countToDiscount: number = ( discount / 100 ) * valueFloat
	
			setPriceWithDiscount( valueFloat - countToDiscount )
			setPrice( valueFloat )
		}
	}

	const handleDiscount = ( value: string ) => {

		const valueFloat = parseFloat( value ) 

		if( !isNaN( valueFloat ) ) {

			const countToDiscount: number = ( valueFloat / 100 ) * price 
	
			setPriceWithDiscount( price - countToDiscount )
			setDiscount( valueFloat )
		}
	}

	const handleOnStock = ( value: string ) => {

		const valueFloat = parseFloat( value ) 

		if( !isNaN( valueFloat ) ) {
			
			setErrors({ ...errors, onStock: '' })
			setOnStock( valueFloat )
		}
	}

	const handlePriceWithDiscount = ( value: string ) => {

		const valueFloat = parseFloat( value )

		setPriceWithDiscount( valueFloat )
	}

	const handleDescription = ( value: string ) => {
		
		setErrors({ ...errors, description: '' })
		setDescription( value )
	}

	const handleCategories = ( value: any ) => {
		
		setErrors({ ...errors, categories: '' })
		setCategories( value )
	}

	const handleImage = ( value: any ) => {

		setErrors({ ...errors, image: '' })
		setImage( value )
	}

	const handleImages = ( value: any ) => {

		setErrors({ ...errors, images: '' })
		setImages( value )
	}

	const validateFiels = (  ) : boolean => {

		let haveErrors = false
		if( name.trim() === '' ) {

			haveErrors = true
			setErrors( preState => { return { ...preState, name: 'El nombre es obligatorio.' }})
		}
		if( !priceWithDiscount || priceWithDiscount <= 0 ) {

			haveErrors = true
			setErrors( preState => { return { ...preState,  priceWithDiscount: 'El precio final es obligatorio.' }})
		} 
		if( categories.length === 0 ) {

			haveErrors = true
			setErrors( preState => { return { ...preState, categories: 'La categoria es obligatoria.' }})
		} 
		if( description.trim() === '' ) {

			haveErrors = true
			setErrors( preState => { return { ...preState,  description: 'La descripción es obligatoria.' }})
		} 
		if( image.length === 0 ) {

			haveErrors = true
			setErrors( preState => { return { ...preState,  image: 'El poster es obligatorio' }})
		} 
		if( images.length === 0 ) {
			
			haveErrors = true
			setErrors( preState => { return { ...preState,  images: 'Las imagenes son obligatorias' }})
		} 
		if( !onStock || onStock <= 0 ) {
			
			haveErrors = true
			setErrors( preState => { return { ...preState,  onStock: 'Es stock debe ser mayor a 0' }})
		} 

		return haveErrors
	}

	useEffect( () => {

		setErrors({ ...errors, priceWithDiscount: '' })
	}, [ priceWithDiscount ])

	return {
		values: {
			name,
			price,
			discount,
			priceWithDiscount,
			description,
			categories,
			image,
			images,
			onStock
		},
		handleChange: {
			handleName,
			handlePrice,
			handleDiscount,
			handlePriceWithDiscount,
			handleDescription,
			handleCategories,
			handleImage,
			handleImages,
			handleOnStock
		},
		errors,
		validateFiels
	}
}

export default useProductForm
