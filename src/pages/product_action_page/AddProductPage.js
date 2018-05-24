import React, { Component } from 'react';

class AddProductPage extends Component {
	render() {
		return (
			<div>
				<h2>Add new product</h2>
				<form action="">
					<div className="form-group">
						<label>Name:</label>
						<input type="text" className="form-control" />
					</div>
					<div className="form-group">
						<label>Price:</label>
						<input type="text" className="form-control" />
					</div>
					<div className="form-group">
						<label>Available: </label>
					</div>
					<div className="checkbox">
						<label>
							<input
								type="checkbox"
								name="chkbStatus"

							/>
							is available
						</label>
					</div>
					<button type="submit" className="btn btn-default">Submit</button>
				</form>
			</div>
		);
	}
}

export default AddProductPage;
