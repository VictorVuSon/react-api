import React, { Component } from 'react';

class UpdateProductPage extends Component {
	render() {
		return (
			<div>
				<h2>Update product</h2>
				<form action="">
					<div className="form-group">
						<label for="email">Email address:</label>
						<input type="email" className="form-control" id="email" />
					</div>
					<div className="form-group">
						<label for="pwd">Password:</label>
						<input type="password" className="form-control" id="pwd" />
					</div>
					<div className="checkbox">
						<label><input type="checkbox" /> Remember me</label>
					</div>
					<button type="submit" className="btn btn-default">Submit</button>
				</form>
			</div>
		);
	}
}

export default UpdateProductPage;
