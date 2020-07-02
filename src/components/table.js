import React from 'react'
import styled from 'styled-components'
import Button from './button.js'
import Filter from './filter.js'
import deleteImg from '../images/deleteImg.png'

const Table = styled.table`
	width: 100%;
	height: auto;
	background-color: #ffffff;
	border-radius: 5px;
`

const Tr = styled.tr`
	height: 30px;
	margin: 10px 10px 0px 10px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${props => props.borderColor || '#fff'};
`

const Th = styled.th`
	width: ${props => props.width || '18%'};
	display: flex;
	text-align: left;
	align-items: center;
	color: #00A0E4;
`

const Td = styled.td`
	width: ${props => props.width || '18%'};
	display: flex;
	text-align: left;
	align-items: 'center';
	justify-content: ${props => props.justifyContent || ''};
	color: #555;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`

export default class ViewTable extends React.Component {

	componentDidUpdate(prevProps){
		if(prevProps.productList !== this.props.productList){
			
		}
		return true;
	}

	handleView = (product) => {
		this.props.viewProduct(product);
	}

	handleDelete = (product) => {
		this.props.onDelete(product);
	}

	onOpenFilter = (value) => {
		this.props.onOpenFilter(value);
	}

	onFilter = (field) => {
		this.props.onFilter(field);
	}

	render(){
		const productList = this.props.productList;
		const selectedField = this.props.selectedField;
		const status = this.props.status;
		return (
			<Table>
				<thead>
				<Tr borderColor='#00A0E4'>
					<Th>
						Nome
						<Filter listFields={this.props.nameList} selectedFilter = {status && selectedField && selectedField === 'name'} onFilter={this.onFilter} onOpenFilter={() => {this.onOpenFilter('name')}}/>
					</Th>
					<Th>
						Departamento
						<Filter listFields={this.props.departmentList} selectedFilter = {status && selectedField && selectedField === 'department'} onFilter={this.onFilter} onOpenFilter={() => {this.onOpenFilter('department')}}/>
					</Th>
					<Th>
						Pet
						<Filter listFields={this.props.petList} selectedFilter = {status && selectedField && selectedField === 'pet'} onFilter={this.onFilter} onOpenFilter={() => {this.onOpenFilter('pet')}}/>
					</Th>
					<Th>
						Idade
						<Filter listFields={this.props.ageList} selectedFilter = {status && selectedField && selectedField === 'age'} onFilter={this.onFilter} onOpenFilter={() => {this.onOpenFilter('age')}}/>
					</Th>
					<Th width='17%' />
				</Tr>
				</thead>
				<tbody>
					{productList && productList.map((product, key) => {
						return(
							<Tr key={key}>
								<Td>{product.name ? product.name : "--"}</Td>
								<Td>{product.department ? product.department : "--"}</Td>
								<Td>{product.pet ? product.pet : "--"}</Td>
								<Td>{product.age ? product.age : "--"}</Td>
								<Td width='17%' justifyContent='flex-end'>
									<Button title="Visualizar" marginRight='6px' onClick={() => this.handleView(product)}/>
									<Button bgImage={deleteImg} onClick={() => this.handleDelete(product)} />
								</Td>
							</Tr>
						);
					})
					}
				</tbody>
			</Table>
		)
	};
}