import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {
	render() {
		let { productItem, index } = this.props;
		return (
			<tr>
				<td>{ index }</td>
				<td>{ productItem.id }</td>
				<td>{ productItem.name }</td>
				<td>{ productItem.price }</td>
				<td>
					<span className="label label-warning">{ productItem.isAvailable ? 'Available' : 'Not Available' }</span>
				</td>
				<td>
					<button type="button" className="btn btn-success btn-update-product">
						<Link to={`/product/${productItem.id}/update`}>
							Update
						</Link>
					</button>
					<button type="button" className="btn btn-danger" onClick={ () => this.deleteProduct(productItem.id) }>Delete</button>
				</td>
			</tr>
		);
	}

	deleteProduct = (id) => {
		if (confirm('Are you sure ?')) { //eslint-disable-line
			this.props.onDelete(id);
		}
	};
}

export default ProductItem;
