import { FC } from 'react'
import {
	Grid, 
	Paper 
} from '@material-ui/core'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

import useStyle from './styles'

const data = [
	{
	  name: 'Page A',
	  uv: 4000,
	  pv: 2400,
	  amt: 2400,
	},
	{
	  name: 'Page B',
	  uv: 3000,
	  pv: 1398,
	  amt: 2210,
	},
	{
	  name: 'Page C',
	  uv: 2000,
	  pv: 9800,
	  amt: 2290,
	},
	{
	  name: 'Page D',
	  uv: 2780,
	  pv: 3908,
	  amt: 2000,
	},
	{
	  name: 'Page E',
	  uv: 1890,
	  pv: 4800,
	  amt: 2181,
	},
	{
	  name: 'Page F',
	  uv: 2390,
	  pv: 3800,
	  amt: 2500,
	},
	{
	  name: 'Page G',
	  uv: 3490,
	  pv: 4300,
	  amt: 2100,
	},
  ];
const Dashboard: FC = () => {

	const classes = useStyle()

	return (
		<main>
			<Grid container spacing={ 3 } >
				<Grid container item spacing={ 3 } >
					<Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 2 } >
						<Paper className={ classes.paper }>

						</Paper>
					</Grid>
					<Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 2 } >
						<Paper className={ classes.paper } >

						</Paper>
					</Grid>
					<Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 2 } >
						<Paper className={ classes.paper } >

						</Paper>
					</Grid>
					<Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 2 } >
						<Paper className={ classes.paper } >

						</Paper>
					</Grid>
					<Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 2 } >
						<Paper className={ classes.paper } >

						</Paper>
					</Grid>
					<Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 2 } >
						<Paper className={ classes.paper } >

						</Paper>
					</Grid>
				</Grid>

				<Grid container item spacing={ 3 } >
					<Grid item xs={ 12 } md={ 6 } >
						<Paper className={ classes.paper2 } >
							<div>

								<ResponsiveContainer width="100%" height="100%">
									<AreaChart
									width={500}
									height={400}
									data={data}
									margin={{
										top: 10,
										right: 30,
										left: 0,
										bottom: 0,
									}}
									>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="name" />
									<YAxis />
									<Tooltip />
									<Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
									</AreaChart>
								</ResponsiveContainer>
							</div>
						</Paper>
					</Grid>
					<Grid item xs={ 12 } md={ 6 }  >
						<Paper className={ classes.paper2 } >

						</Paper>
					</Grid>
				</Grid>

				<Grid container item spacing={ 3 } >
					<Grid item xs={ 12 } md={ 6 } >
						<Paper className={ classes.paper2 } >

						</Paper>
					</Grid>
					<Grid item xs={ 12 } md={ 6 }  >
						<Paper className={ classes.paper2 } >

						</Paper>
					</Grid>
				</Grid>

				<Grid container item spacing={ 3 } >
					<Grid item xs={ 12 } md={ 12 } >
						<Paper className={ classes.paper2 } >

						</Paper>
					</Grid>
				</Grid>
			</Grid>
		</main>
	)
}

export default Dashboard
