import { FC } from 'react'
import {  } from 'next'
import { useEffect } from 'react'

interface Props {
	dataResp?: object
}

const Home: FC<Props> = ({ dataResp }) => {

	const getData = async (  ) => {
		const data = {
			email: '1@ejemplo.com',
			password: '1234'
		}
	
		const resp = await fetch( 'http://localhost:3001/user/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': 'true'
			},
			credentials: 'include',
			body: JSON.stringify( data )
		})
		const dataResp = await resp.json()
		console.log("🚀 ~ file: Home.tsx ~ line 35 ~ constgetStaticProps:GetStaticProps= ~ dataResp", dataResp)
	}

	const getData2 = async (  ) => {
		const data = {
			title: '1@ejemplo.com',
			description: '1234'
		}
	
		const resp = await fetch( 'http://localhost:3001/todo/new-todo', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify( data ),
			credentials: 'include'
		})
		const dataResp = await resp.json()
		console.log("🚀 ~ file: Home.tsx ~ line 35 ~ constgetStaticProps:GetStaticProps= ~ dataResp", dataResp)
	}

	/* useEffect( () => {
		getData()
		setTimeout( () => getData2(), 7000)
	}, []) */
	
	return (
		<div>
		</div>
	)
}

export default Home
