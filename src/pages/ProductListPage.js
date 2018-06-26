import React, {Component} from 'react';
import ProductList from './../components/product_list/ProductList';
import ProductItem from './../components/product_item/ProductItem';
import {Link} from 'react-router-dom';

class ProductListPage extends Component {
	render() {
		let { products } = this.props;
		return (
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<Link to="/product/add" className="btn btn-info btn-add-product">
					Add product
				</Link>
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

	componentDidMount() {
		this.props.fetchAllProducts();
	}

	onDelete = (id) => {
		this.props.onDeleteProduct(id);
	};

	showProducts(products) {
		let result = null;
		if (products.length > 0) {
			result = products.map((item, index) => {
				return (
					<ProductItem
						key={ index }
						index={ index }
						productItem={ item }
						onDelete={this.onDelete}
					/>
				)
			})
		}
		return result;
	}
}

export default ProductListPage;
