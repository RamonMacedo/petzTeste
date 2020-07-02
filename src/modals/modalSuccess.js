import React from 'react'
import styled from 'styled-components'
import Background from '../components/background'
import Image from '../components/image'
import Label from '../components/label'

import SuccessImg from '../images/success.png'

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

export default class ModalSuccess extends React.Component {

	handleClose = () => {
		this.props.onClose();
	}

	render(){
		return (
			<div>
				<Background onClick={this.handleClose} />
				<Container width="250px" height="auto">
					<Image width="100%" height="75px" margin="0px 0px 20px 0px" bgImage={SuccessImg}/>
					<Label 
						content = 'Produto excluído com sucesso!'
						width = "100%"
						margin = '0px 0px 20px 0px'
						textAlign = 'center'
					/>
				</Container>
			</div>
		)
	};
}