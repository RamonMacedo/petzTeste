import React from 'react'
import Table from '../components/table'
import ModalDelete from '../modals/modalDelete'

const API_URL = "https://my-json-server.typicode.com/ArthurSantos20/petzTeste";

export default class Main extends React.Component {
	state = {
		productList:[],
		openDeleteModal: false
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

	handleOpenDelete = (product) => {
		this.setState({openDeleteModal: true, selectedProduct: product});
	}

	handleClose = () => {
		this.setState({openDeleteModal:false});
	}

	render() {
		return (
			<div>
				<Table 
					productList = {this.state.productList}
					viewProduct = {this.handleView}
					onDelete = {this.handleOpenDelete}
				/>

				{this.state.openDeleteModal &&
					<ModalDelete 
						active = {true}
						selectedProduct = {this.state.selectedProduct}
						onDelete = {this.handleDeleteItem}
						onClose = {this.handleClose}
					/>
				}
			</div>
		)	
	}
}