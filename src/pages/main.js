import React from 'react'
import Table from '../components/table'
import ModalDelete from '../modals/modalDelete'
import ModalSuccess from '../modals/modalSuccess'

const API_URL = "https://my-json-server.typicode.com/ArthurSantos20/petzTeste";

export default class Main extends React.Component {
	state = {
		productList:[],
		openDeleteModal: false
	}

	componentDidMount(){
		this.setData();
	}

	setData = () => {
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

	handleDeleteItem = () => {
		var { selectedProduct } = this.state;
		fetch(`${API_URL}/products/${selectedProduct.id}`, {
			method: 'DELETE',
		}).then(function(response){
			console.log("Success");
			this.setState({openModalSuccess:true, openDeleteModal:false}, () => {
				setTimeout(() => { 
					this.setState({openModalSuccess:false}, () => { this.setData(); });
				}, 3000);
			});
		}.bind(this))
		.catch(function(error){
			console.log("Error");
		})
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
						selectedProduct = {this.state.selectedProduct}
						onDelete = {this.handleDeleteItem}
						onClose = {this.handleClose}
					/>
				}

				{this.state.openModalSuccess &&
					<ModalSuccess 
					/>
				}
			</div>
		)	
	}
}