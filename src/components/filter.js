import React from 'react'
import styled from 'styled-components'
import Label from './label'

const Triangle = styled.div`
	width: 0; 
	height: 0; 
	margin-left: 5px;
	border-left: 8px solid transparent;
	border-right: 8px solid transparent;
	border-top: ${props => !props.selectedFilter ? '8px solid #00A0E4;' : ''};
	border-bottom: ${props => props.selectedFilter ? '8px solid #00A0E4;' : ''};
	cursor: pointer;
`

const Container = styled.div`
	width: auto;
	height: auto;
	margin: 5px;
	padding: 5px;
	position: absolute;
	border: 1px solid #555;
	background-color: #fff;
`

const ListItem = styled.div`
	width: 100%; 
	height: 20px;
	margin: 5px 0px;
	border-bottom: ${props => props.borderBottom || ''};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

	:hover{
		cursor: pointer;
	}
`

export default class FilterView extends React.Component {
	state = {
		openFilter: false
	}

	handleOpen = () => {
		this.setState({openFilter: !this.state.openFilter}, () => {
			this.props.onOpenFilter();
		});
	}

	handleFilter = (field) => {
		this.setState({openFilter: false}, () => {
			this.props.onFilter(field);
		});
	}

	render(){
		const listFields = this.props.listFields;
		const selectedFilter = this.props.selectedFilter;
		return (
			<div>
				<Triangle selectedFilter={selectedFilter} onClick={this.handleOpen} />
				{selectedFilter &&
					<Container>
						{listFields && listFields.map(function(field, key){
							if(field !== 'undefined'){
								return (
									<ListItem 
										key ={key}
										borderBottom = {listFields.length !== key + 1 ? '1px solid #ebebeb' : ''}
										onClick = {() => {this.handleFilter(field)}}
									>
										<Label
											width="100%"
											fontWeight="normal" 
											color="#555"
											cursor="pointer" 
											content={field}
										/>
									</ListItem>
								);
							}
						}.bind(this))
						}
					</Container>
				}
			</div>
		);
	};
}