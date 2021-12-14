export const GA_TRACKING_ID = 'G-N1LF5QKCVG'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = ( url: URL ) => {

	try {

		window.gtag( 'config', GA_TRACKING_ID, {
			page_path: url
		})
	} catch ( error ) {
		
		console.log("Error from the trackerPageView => ", error);
	}
}

type GTagEvent = {
	action: string
	category: string
	label: string
	value: number
}
  
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent ) => {

	window.gtag( 'event', action, {
		event_category: category,
		event_label: label,
		value: value
	})
}