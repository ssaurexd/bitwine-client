import { useEffect, useState } from 'react'

const useNav = () => {

	/* hooks */
	const [ isScrolling, setIsScrolling ] = useState<boolean>( true )

	/* funtions */
	const onScroll = () => {
		
		const bodyScrollY = window.scrollY
		const navElement = document.querySelector('#nav-main')
		const navHeight = navElement?.firstElementChild?.clientHeight
		
		if( navHeight && bodyScrollY < navHeight ) setIsScrolling( true )
		else setIsScrolling( false )
	}

	useEffect( () => {

		window.addEventListener( 'scroll', onScroll )

		return () => {
			window.removeEventListener( 'scroll', onScroll )
		}
	}, [  ])

	return {
		isScrolling
	}
}

export default useNav
