import { FC, useState } from 'react'
import { Formik } from 'formik'
import { IconButton } from '@material-ui/core'
import { Search } from '@material-ui/icons'


interface ISearchValues {
	query: string
}
interface Props {
	transparent: boolean,
	onMobile?: boolean
}

const CustomSearch: FC<Props> = ({ transparent, onMobile }) => {

	/* hooks */
	const [ initialValues, setInitialValues ] = useState<ISearchValues>({
		query: ''
	})

	/* funtions */
	const _onSubmit = async ( values: ISearchValues ) => {
		console.log( values.query )
	}

	return (
		<div className={`${ transparent ? 'white-light ' : 'gray-light '} ${ onMobile && 'width-100' }`}>
			<Formik
				initialValues={ initialValues }
				onSubmit={ value => _onSubmit( value ) }
			>
				{({ handleSubmit, handleChange, values }) => (
					<form onSubmit={ handleSubmit } >
						<div className='search-container' >
							<input 
								type="text" 
								className='search-input'
								placeholder='Buscar...'
								value={ values.query }
								onChange={ handleChange }
								name='query'
								autoComplete='off'
							/>
							<div className="search-icon">
								<IconButton
									size='small'
									color='inherit'
									type='submit'
								>
									<Search color='inherit' />
								</IconButton>
							</div>
						</div>
					</form>
				)}
			</Formik>
		</div>
	)
}

export default CustomSearch
