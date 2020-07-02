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

	handleView = (product) => {
		this.props.viewProduct(product);
	}

	handleDelete = (product) => {
		this.props.onDelete(product);
	}

	render(){
		const productList = this.props.productList;
		return (
			<Table>
				<thead>
				<Tr borderColor='#00A0E4'>
					<Th>
						Nome
						<Filter />
					</Th>
					<Th>
						Departamento
						<Filter />
					</Th>
					<Th>
						Pet
						<Filter />
					</Th>
					<Th>
						Idade
						<Filter />
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