import { FC } from 'react'
import dynamic from 'next/dynamic'

import { SunEditorReactProps } from 'suneditor-react/dist/types/SunEditorReactProps'
import { complex } from 'suneditor-react/dist/misc/buttonList'


const SunEditor = dynamic(() => import('suneditor-react'), { ssr: false })

const SunEditorRichText: FC<SunEditorReactProps> = ({ height = '300px', ...props }) => {

	return (
		<div>
			<SunEditor
				{ ...props }
				height={ height }
				setOptions={{
					buttonList: complex
				}}
			/>
		</div>
	)
}

export default SunEditorRichText
