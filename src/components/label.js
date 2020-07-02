import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
	width: ${props => props.width || ''};
	height: ${props => props.height || ''};
	margin: ${props => props.margin || ''};
	color: ${props => props.color || ''};
	font-weight: ${props => props.fontWeight || ''};
	font-size: ${props => props.fontSize || ''};
	text-align: ${props => props.textAlign || ''};
	float: left;
`

export default class LabelView extends React.Component {
	render(){
		const props = this.props;
		return (
			<Label 
				width = {props.width} 
				height = {props.height} 
				margin = {props.margin}
				color = {props.color}
				fontWeight = {props.fontWeight}
				fontSize = {props.fontSize}
				textAlign = {props.textAlign}
			>
				{props.content}
			</Label>
		)
	};
}