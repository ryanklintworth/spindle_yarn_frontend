import React, { Component } from 'react';
import Item from './Item';
import axios from 'axios';

class MenWear extends Component {
	state = {
		products: []
	};

	getItems = () => {
		axios
			.get('https://spindlexyarn.herokuapp.com/products')
			.then(response => this.setState({ products: response.data }))
			.catch(error => console.error(error));
	};

	componentDidMount = () => {
		this.getItems();
	};

	render = () => {
		return (
			<div>
				{this.state.products.map(item => {
					if (item.category === 'men') {
						return <Item item={item} />;
					}
				})}
			</div>
		);
	};
}

export default MenWear;
