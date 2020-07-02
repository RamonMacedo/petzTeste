import React from 'react'
import styled from 'styled-components'
import Background from '../components/background'
import Image from '../components/image'
import Label from '../components/label'
import Button from '../components/button'

import WarningImg from '../images/warning.png'

const Container = styled.div`
	width: ${props => props.width || '100%'};
	height: ${props => props.height || 'auto'};
	margin: ${props => props.margin || ''};
	display: ${props => props.display || ''};
	float: ${props => props.float || 'left'};
	padding: 20px;
	position: absolute;
	background-color: #ffffff;
	border-radius: 5px;
	left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
`

export default class ModalDelete extends React.Component {

	handleDeleteItem = () => {
		this.props.onDelete();
	}

	handleClose = () => {
		this.props.onClose();
	}

	render(){
		const props = this.props;
		return (
			<div>
				<Background onClick={this.handleClose} />
				<Container width="250px" height="auto">
					<Image width="100%" height="75px" margin="0px 0px 20px 0px" bgImage={WarningImg}/>
					<Label 
						content = {`Tem certeza que deseja excluir ${props.selectedProduct.name}?`}
						margin = '0px 0px 20px 0px'
						textAlign = 'center'
					/>

					<div style={{width: '100%', display:'flex', justifyContent:'space-between'}}>
						<Button width="87px" title="CANCELAR" onClick={this.handleClose}/>
						<Button width="87px" title="OK" onClick={this.handleDeleteItem}/>
					</div>
				</Container>
			</div>
		)
	};
}