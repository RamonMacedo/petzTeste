import React from 'react'
import Table from '../components/table'

const API_URL = "https://my-json-server.typicode.com/ArthurSantos20/petzTeste";

export default class Main extends React.Component {

	componentDidMount(){
		fetch(`${API_URL}/produtos`)
	  	.then(response => response.json())
	 	.then(products => this.listProducts(products))
	}

	listProducts(products) {
		console.log('Produtos', products);
	}

	render() {
		return (
			<div>
				<Table />
			</div>
		)	
	}
}