import React, { Component } from 'react';

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
						Update
					</button>
					<button type="button" className="btn btn-danger" onClick={ () => this.deleteProduct(productItem.id) }>Delete</button>
				</td>
			</tr>
		);
	}

	deleteProduct = (id) => {
		if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
			this.props.onDelete(id);
		}
	};
}

export default ProductItem;
