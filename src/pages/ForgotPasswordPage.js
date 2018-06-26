import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const styles = {
	backgroundColor: '#f1f1f1',
};

class ForgotPasswordPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			isRemember: ''
		};
	}

	onChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({
			[name]: value
		});
	};

	componentDidMount() {
		// let { match } = this.props;
		// if (match) {
		// 	let id = match.params.id;
		// 	this.props.onEditProduct(id);
		// }
	}

	componentWillReceiveProps(nextProps) {
		// if (nextProps && nextProps.itemEditing) {
		// 	let { itemEditing } = nextProps;
		// 	this.setState({
		// 		id : itemEditing.id,
		// 		txtName : itemEditing.name,
		// 		txtPrice : itemEditing.price,
		// 		chkbStatus : itemEditing.isAvailable
		// 	});
		// }
	}

	onLogin = (e) => {
		e.preventDefault();
		console.log(this.state);
		// let { id, txtName, txtPrice, chkbStatus } = this.state;
		// let { history } = this.props;
		// let product = {
		// 	id: id,
		// 	name : txtName,
		// 	price : txtPrice,
		// 	isAvailable : chkbStatus
		// };
		// if (id) {
		// 	this.props.onUpdateProduct(product);
		// } else {
		// 	this.props.onAddProduct(product);
		// }
		// history.goBack();
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onLogin}>
					<div className="container">
						<label>
							<b>Username</b>
						</label>
						<input
							type="text"
							placeholder="Enter Username"
							name="username"
							required onChange={this.onChange}
						/>
						<button type="submit">Submit</button>
					</div>
					<div className="container" style={styles}>
						<button type="button" className="cancelbtn">Cancel</button>
						<span className="psw">
							<Link to={'/chat-room'}>Login</Link>
						</span>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {

	}
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		// onLogin : (data) => {
		// 	dispatch(requestLogin(data));
		// }

	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordPage);



