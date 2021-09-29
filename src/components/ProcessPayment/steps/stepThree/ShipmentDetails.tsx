import { FC } from 'react'
import { 
	Button, 
	Grid, 
	Paper,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography
} from '@material-ui/core'
import {
	ExpandMore
} from '@material-ui/icons'

import useStyle from '../../styles'
import TotalInfo from '../../TotalInfo'


interface Props {
	onGoBack: () => void
}
const ShipmentDetails: FC<Props> = ({ onGoBack }) => {

	/* hooks */
	const classes = useStyle()

	return (
		<Grid container spacing={ 3 } wrap='wrap-reverse' >
			<Grid item xs={ 12 } md ={ 8 } >
				<div className={ classes.acordion }>
					<Accordion >
						<AccordionSummary
							expandIcon={ <ExpandMore /> }
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography variant='subtitle2' >Forma de pago</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
								malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
				<Grid container item xs justifyContent='space-between' direction='row' wrap='wrap' >
					<Grid item xs={ 12 } md={ 5 } >
						<Button
							variant='outlined' 
							color='secondary' 
							fullWidth 
							onClick={ onGoBack }
							className={ classes.mb3 }
						>
							Regresar
						</Button>
					</Grid>
					<Grid item xs={ 12 } md={ 5 } >
						<Button 
							color='secondary' 
							fullWidth
							className={ classes.mb3 }
						>
							Siguiente
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={ 12 } md ={ 4 } >
				<Paper className={ classes.paperTotal } >
					<TotalInfo />
				</Paper>
			</Grid>
		</Grid>
	)
}

export default ShipmentDetails