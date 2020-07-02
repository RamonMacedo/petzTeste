import React from 'react'
import Card from '../components/card'


export default class Details extends React.Component {
	state = {
		productInfo: {} 
	}

	componentDidMount(){
		this.setData();
	}

	setData = () => {
		var productInfo = this.props.location.state;
		this.setState({productInfo})
	}

	goBack = () => {
		this.props.history.push('/')
	}

	render() {
		return (
			<div>
				<Card productInfo = {this.state.productInfo} onBack = {this.goBack}/>
			</div>
		)	
	}
}