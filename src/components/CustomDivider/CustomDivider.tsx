import { FC, ReactElement } from 'react'
 

interface Props {
	fullWidth?: boolean,
	middleInfo: string | ReactElement,
	colorLine?: string
}

const CustomDivider: FC<Props> = ({ middleInfo, colorLine }) => {

	return (
		<div className='custom-divider' >
			<hr style={{ borderColor: colorLine }} />
			<div className='custom-divider__content' >{ middleInfo }</div>
			<hr style={{ borderColor: colorLine }}  />
		</div>
	)
}

export default CustomDivider
