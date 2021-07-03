import { FC, ReactElement } from 'react'
import Link from 'next/link'
import Button, { ButtonProps } from '@material-ui/core/Button' 


interface Props extends ButtonProps {
	hreflink: string,
	text: string | ReactElement
}

const CustomButtonLink: FC<Props> = ( props ) => {

	const { hreflink, text } = props

	return (
		<Button
			{ ...props }
			id='custom-btn-link'
		>
			<Link href={ hreflink } >
				<a>{ text }</a>
			</Link>
		</Button>
	)
}

export default CustomButtonLink
