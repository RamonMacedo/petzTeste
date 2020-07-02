import React from 'react'
import Table from '../components/table'

const API_URL = "https://my-json-server.typicode.com/ArthurSantos20/petzTeste";

export default class Main extends React.Component {
	state = {
		productList:[]
	}

	componentDidMount(){
		fetch(`${API_URL}/products`)
	  	.then(response => response.json())
	 	.then(products => this.listProducts(products))
	}

	listProducts = (products) => {
		this.setState({productList: products});
	}

	handleView = (product) => {
		this.props.history.push('/detalhes', product);
	}

	render() {
		return (
			<div>
				<Table 
					productList={this.state.productList}
					viewProduct={this.handleView}
				/>
			</div>
		)	
	}
}