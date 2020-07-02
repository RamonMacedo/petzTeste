import React from 'react'
import styled from 'styled-components'
import Button from './button.js'
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
	render(){
		return (
			<Table>
				<thead>
				<Tr borderColor='#00A0E4'>
					<Th>Nome</Th>
					<Th>Departamento</Th>
					<Th>Quantidade</Th>
					<Th>Preço</Th>
					<Th width='17%' />
				</Tr>
				</thead>
				<tbody>
					<Tr>
						<Td>Alfreds Futterkiste</Td>
						<Td>Alfreds Futterkiste</Td>
						<Td>Maria Anderson</Td>
						<Td>Germany</Td>
						<Td width='17%' justifyContent='flex-end'>
							<Button title="Visualizar" marginRight='6px'/>
							<Button bgImage={deleteImg} />
						</Td>
					</Tr>
				</tbody>
			</Table>
		)
	};
}