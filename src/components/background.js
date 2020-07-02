import React from 'react'

export default class ButtonView extends React.Component {

	handleClick = () => {
		this.props.onClick();
	}

	render(){
		const props = this.props;
		return (
			<div 
				onClick = {this.handleClick}
				style={{
					width: "100%", 
					height: "100%", 
					position: "fixed", 
					backgroundColor:"#000",
					top: 0,
					left: 0,
					opacity: 0.5
				}}
			/>
		)
	};
}