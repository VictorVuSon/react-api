import React, { Component } from 'react';

class ProductItem extends Component {
	render() {
		return (
			<tr>
				<td>1</td>
				<td>IDNCK</td>
				<td>iPhone 6</td>
				<td>500</td>
				<td>
					<span className="label label-warning">Available</span>
				</td>
				<td>
					<button type="button" className="btn btn-success btn-update-product">
						Update
					</button>
					<button type="button" className="btn btn-danger">Delete</button>
				</td>
			</tr>
		);
	}
}

export default ProductItem;
