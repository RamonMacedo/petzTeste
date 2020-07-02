import React from 'react'
import styled from 'styled-components'
import logo from '../images/petz-logo.png';

const Container = styled.div`
	width: 100%;
	height: 100px;
	margin-bottom: 20px;
	background-image: url(${logo});
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
`

export default class Header extends React.Component {
	render(){
		return (
			<Container />
		)
	};
}