import React from 'react'
import styled from 'styled-components'
import Image from './image'

const Button = styled.button`
	width: auto;
	height: 21px;
	margin-right: ${props => props.marginRight || '0px'};
	border: none;
	border-radius: 5px;

	:hover{
		background-color: #bdbbbb;
		cursor: pointer;
	}
`

export default class ButtonView extends React.Component {
	render(){
		const props = this.props;
		return (
			<Button marginRight={props.marginRight}>{props.title ? props.title : props.bgImage ? <Image bgImage={props.bgImage} /> : ''}</Button>
		)
	};
}