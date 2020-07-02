import React from 'react'
import styled from 'styled-components'
import Label from './label'
import Image from './image'

import ExampleImg from '../images/exampleImg.png'
import BackpageImg from '../images/backpage.png'

const Container = styled.div`
	width: ${props => props.width || '100%'};
	height: ${props => props.height || 'auto'};
	margin: ${props => props.margin || ''};
	display: ${props => props.display || ''};
	float: ${props => props.float || 'left'};
	justify-content: ${props => props.justifyContent || ''};
	cursor: ${props => props.cursor || ''};
	position: relative;
	background-color: #ffffff;
	border-radius: 5px;
`

export default class Card extends React.Component {

	handleBack = () => {
		this.props.onBack();
	}

	render(){
		const prodInfo = this.props.productInfo;
		return (
			<Container display='flex'>
				<Container margin = '20px' display='inline-block'>
					<Container margin = '20px'>
						<Image 
							width = '100px' 
							height = '100px'
							float = 'left'
							border = '1px solid #555'
							borderRadius = '5px'
							bgImage = {prodInfo && prodInfo.picture ? prodInfo.picture : ExampleImg}
						/>
						<div style={{display:'inline-block'}}>
							<Label 
								content = {prodInfo.name}
								width = '90%'
								height = '20px'
								margin = '0px 0px 0px 20px'
								color = '#00A0E4'
								fontWeight = 'bold'
							/>
							<Label 
								content = {prodInfo.department}
								height = '20px'
								margin = '0px 0px 0px 20px'
								color = '#555'
								fontSize = '13px'
							/>
						</div>

						<Container width='25%' float='right' display='inline-block' margin='0px 20px 0px 0px'>
							<div style={{width: '100%', float: 'left'}}>
								<Label 
									content = 'Pet:'
									height = '20px'
									margin = '0px 0px 5px 5px'
									color = '#00A0E4'
									fontWeight = 'bold'
								/>
								<Label 
									content = {prodInfo.pet ? prodInfo.pet : "--"}
									height = '20px'
									margin = '0px 0px 5px 5px'
									color = '#555'
								/>
							</div>

							<div style={{width: '100%', float: 'left'}}>
								<Label 
									content = 'Idade:'
									height = '20px'
									margin = '0px 0px 0px 5px'
									color = '#00A0E4'
									fontWeight = 'bold'
								/>
								<Label 
									content = {prodInfo.age ? prodInfo.age : "--"}
									height = '20px'
									margin = '0px 0px 0px 5px'
									color = '#555'
								/>
							</div>
						</Container>
					</Container>

					<Container margin = '0px 20px' display='inline-block'>
						<Label 
							content = 'Descrição:'
							width = '100%'
							height = '20px'
							color = '#00A0E4'
							fontWeight = 'bold'
						/>
						<Label 
							content = {prodInfo.description}
							color = '#555'
							fontSize = '13px'
							textAlign = 'justify'
							margin = '0px 20px 20px 0px'
						/>
					</Container>

					<Container width='auto' float='right' cursor='pointer' display='flex' justifyContent='flex-end' onClick={this.handleBack}>
						<Image 
							width = '14px' 
							height = '14px'
							float = 'left'
							bgImage = {BackpageImg}
							cursor='pointer'
						/>
						<Label 
							content = 'Voltar'
							height = '20px'
							margin = "0px 0px 0px 5px"
							color = '#555'
							fontWeight = 'bold'
							cursor='pointer'
						/>
					</Container>
				</Container>
			</Container>
		)
	};
}