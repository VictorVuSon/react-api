import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AddProductPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: '',
			txtName: '',
			txtPrice: '',
			chkbStatus: ''
		};
	}

	onChange = (e) => {
		let target = e.target;
		let name = target.name;
		let value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({
			[name]: value
		});
	};

	componentDidMount() {
		let { match } = this.props;
		if (match) {
			let id = match.params.id;
			this.props.onEditProduct(id);
		}
	}

	componentWillReceiveProps(nextProps){
		if (nextProps && nextProps.itemEditing) {
			let { itemEditing } = nextProps;
			this.setState({
				id : itemEditing.id,
				txtName : itemEditing.name,
				txtPrice : itemEditing.price,
				chkbStatus : itemEditing.isAvailable
			});
		}
	}

	onSave = (e) => {
		e.preventDefault();
		let { id, txtName, txtPrice, chkbStatus } = this.state;
		let { history } = this.props;
		let product = {
			id: id,
			name : txtName,
			price : txtPrice,
			isAvailable : chkbStatus
		};
		if (id) {
			this.props.onUpdateProduct(product);
		} else {
			delete product.id;
			this.props.onAddProduct(product);
		}
		history.goBack();
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSave}>
					<div className="form-group">
						<label>Name:</label>
						<input
							type="text"
							className="form-control"
							name="txtName"
							value={this.state.txtName}
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label>Price:</label>
						<input
							type="text"
							className="form-control"
							name="txtPrice"
							value={this.state.txtPrice}
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label>Available: </label>
					</div>
					<div className="checkbox">
						<label>
							<input
								type="checkbox"
								name="chkbStatus"
								value={this.state.chkbStatus}
								onChange={this.onChange}
								checked={this.state.chkbStatus}
							/>
							Available
						</label>
					</div>
					<Link to="/product-list" className="btn btn-danger mr-10">
						Cancel
					</Link>
					<button type="submit" className="btn btn-default">Submit</button>
				</form>
			</div>
		);
	}
}

export default AddProductPage;


