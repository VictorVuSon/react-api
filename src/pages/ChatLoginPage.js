import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const styles = {
	backgroundColor: '#f1f1f1',
};

class ChatLoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			isRemember: false
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
					<div className="imgcontainer">
						<img
							src="https://www.w3schools.com/howto/img_avatar2.png"
							alt="Avatar"
							className="avatar"
						/>
					</div>

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
						<label>
							<b>Password</b>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							name="password"
							required
							onChange={this.onChange}
						/>
						<button type="submit">Login</button>
						<label>
							<input
								type="checkbox"
					            name="isRemember"
								onChange={this.onChange}
							/> Remember me
						</label>
					</div>
					<div className="container" style={styles}>
						<button type="button" className="cancelbtn">Cancel</button>
						<span className="psw">Forgot <Link to={'/forgot-password'}>password?</Link></span>
					</div>
				</form>
			</div>
		);
	}
}

export default ChatLoginPage;