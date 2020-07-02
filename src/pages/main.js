import React from 'react'
import Table from '../components/table'
import ModalDelete from '../modals/modalDelete'
import ModalSuccess from '../modals/modalSuccess'

const API_URL = "https://my-json-server.typicode.com/ArthurSantos20/petzTeste";

export default class Main extends React.Component {
	state = {
		productList:[],
		openDeleteModal: false,
		nameList: [],
		departmentList: [],
		petList: [],
		ageList: []
	}

	componentDidMount(){
		this.setData();
	}

	setData = () => {
		fetch(`${API_URL}/products`)
	  	.then(response => response.json())
	 	.then(products => {
	 		this.listProducts(products)
			var newState = {};
			var key;
			var i = 0;

			var nameB = {};
			for (i = 0; i < products.length; i++) {
			    nameB[products[i].name] = products[i].name;
			}
			newState.nameList = [];
			for (key in nameB) {
			    newState.nameList.push(key);
			}

			var depB = {};
			for (i = 0; i < products.length; i++) {
			    depB[products[i].department] = products[i].department;
			}
			newState.departmentList = [];
			for (key in depB) {
			    newState.departmentList.push(key);
			}

			var petB = {};
			for (i = 0; i < products.length; i++) {
			    petB[products[i].pet] = products[i].pet;
			}
			newState.petList = [];
			for (key in petB) {
			    newState.petList.push(key);
			}

			var ageB = {};
			for (i = 0; i < products.length; i++) {
			    ageB[products[i].age] = products[i].age;
			}
			newState.ageList = [];
			for (key in ageB) {
			    newState.ageList.push(key);
			}

			this.setState(newState);
	 	})
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

	handleOpenFilter = (value) => {
		this.setState({selectedField: value, status: value === this.state.selectedField ? !this.state.status : true});
	}

	handleFilter = (field) => {
		var { selectedField } = this.state;
		fetch(`${API_URL}/products?${selectedField}=${field}`)
		.then((response) => response.json())
		.then((products) => {
			this.setState({selectedField: '', status: false}, () => {
				this.listProducts(products);
			});
		});
	}

	render() {
		return (
			<div>
				<Table 
					productList = {this.state.productList}
					viewProduct = {this.handleView}
					nameList = {this.state.nameList}
					departmentList = {this.state.departmentList}
					petList = {this.state.petList}
					ageList = {this.state.ageList}
					onDelete = {this.handleOpenDelete}
					onFilter = {this.handleFilter}
					onOpenFilter = {this.handleOpenFilter}
					selectedField = {this.state.selectedField}
					status = {this.state.status}
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