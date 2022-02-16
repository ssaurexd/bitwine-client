import { FC, useState } from 'react'
import { 
	Container,
	Tabs,
	Tab,
	useTheme,
	useMediaQuery,
	Box,
	Typography
} from '@material-ui/core'
import { 
	Person, 
	Settings, 
	VpnKey, 
} from '@material-ui/icons'

import useStyle from './styles'

import MyProfile from '../MyProfile'
import ChangePassword from './ChangePassword'


interface Props {
	
}
const MySettings: FC<Props> = () => {

	/* state */
	const [ tabIndex, setTabIndex ] = useState( 0 )

	/* hooks */
	const theme = useTheme()
	const isSmall = useMediaQuery( theme.breakpoints.down( 'sm' ) )
	const classes = useStyle()

	/* funtions */
	const handleTabChange = ( event: React.ChangeEvent<{}>, newValue: number ) => {
		
		setTabIndex( newValue )
	}

	const a11yProps = (index: any) => {
		return {
			id: `vertical-tab-${index}`,
			'aria-controls': `vertical-tabpanel-${index}`,
		}
	}

	return (
		<Container className={ classes.root } >
			<Tabs
				orientation={ isSmall ? 'horizontal' : 'vertical' }
				variant='scrollable'
				scrollButtons={ isSmall ? 'on' : 'desktop' }
				value={ tabIndex }
				onChange={ handleTabChange }
				aria-label='Vertical tabs example'
				indicatorColor='primary'
				className={ classes.tabs }
			>
				<Tab label='Perfil' {...a11yProps(0)} icon={ <Person /> } />
				<Tab label='Cambiar contraseña' {...a11yProps(1)} icon={ <VpnKey /> } />
				<Tab label='Configuración' {...a11yProps(2)} icon={ <Settings /> } />
			</Tabs>
			<TabPanel title='Editar Perfil' value={ tabIndex } index={0} >
				<MyProfile />
			</TabPanel>
			<TabPanel title='Cabiar Contraseña' value={ tabIndex } index={1} >
				<ChangePassword />
			</TabPanel>
			<TabPanel title='Configuracion' value={ tabIndex } index={2} >
				Configuracion Extra aqui
			</TabPanel>
		</Container>
	)
}

interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
	title?: string
}
const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, title , ...other } = props;
	const classes = useStyle()
  
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			className={ classes.tabContainer }
			{...other}
		>
			{value === index && (
				<Box p={ 3 } >
					<Typography component='div' >
						<Typography variant='subtitle1' align='center' color='textPrimary' style={{ textTransform: 'uppercase' }} > { title } </Typography>
						{children}
					</Typography>
				</Box>
			)}
	  	</div>
	);
  }

export default MySettings