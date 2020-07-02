import React from 'react'
import styled from 'styled-components'

const Image = styled.div`
	width: ${props => props.width || '13px'};
	height: ${props => props.height || '13px'};
	float: ${props => props.float || ''};
	margin: ${props => props.margin || ''};
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	background-image: url('${props => props.bgImage || ''}');
	background-color: ${props => props.bgColor || ''};
	border: ${props => props.border || ''};
	border-radius: ${props => props.borderRadius || ''};
	cursor: ${props => props.cursor || ''};
	animation: gira 8s linear infinite;
    transform-origin: 43px 40px;
`

export default class ImageView extends React.Component {
	render(){
		const props = this.props;
		return (
			<Image 
				width={props.width}
				height={props.height}
				float={props.float}
				margin={props.margin}
				border={props.border}
				borderRadius={props.borderRadius}
				bgImage={props.bgImage} 
				bgColor={props.bgColor}
				cursor={props.cursor}
			/>
		)
	};
}