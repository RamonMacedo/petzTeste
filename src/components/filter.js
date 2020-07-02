import React from 'react'
import styled from 'styled-components'

const Triangle = styled.div`
	width: 0; 
	height: 0; 
	margin-left: 5px;
	border-left: 8px solid transparent;
	border-right: 8px solid transparent;
	border-top: 8px solid #00A0E4;
	cursor: pointer;
`

export default class FilterView extends React.Component {
	render(){
		const props = this.props;
		return (
			<div>
				<Triangle />
				{this.state.openFilter &&
					<Container>
						<Label></Label>
					</Container>
				}
			</div>
		)
	};
}