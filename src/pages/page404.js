import React from 'react'
import styled from 'styled-components'
import Label from '../components/label'

const Container = styled.div`
	width: 100%;
	height: auto;
	float: left;
	justify-content: center;
	display: flex;
	background-color: #ffffff;
	border-radius: 5px;
`

export default class Page404 extends React.Component {
	render() {
		return (
			<div>
				<Container>
					<Label 
						content="404" 
						height="auto" 
						color="#00A0E4" 
						fontWeight="bold"
						fontSize="150px"
					/>
				</Container>
			</div>
		)	
	}
}