import React, { Component } from 'react';
import ProductList from './../../components/product_list/ProductList';
import ProductItem from './../../components/product_item/ProductItem';

class ProductListPage extends Component {
	render() {
		let products = [];
		return (
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<button type="button" className="btn btn-info btn-add-product">Add product</button>
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h3 className="panel-title">List products</h3>
					</div>
					<ProductList>
						{ this.showProducts(products) }
					</ProductList>
				</div>
			</div>
		);
	}

	showProducts(products) {
		let result = null;
		if (products.length > 0) {
			result = products.map((item, index) => {
				return (
					<ProductItem
						key={ index }
						index={ index }
						product={ item }
					/>
				)
			})
		}
		return result;
	}
}

export default ProductListPage;
