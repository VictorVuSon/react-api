import React, { Component } from 'react';

const styles = {
	backgroundColor: '#f1f1f1',
};

class ChatLoginPage extends Component {
	render() {
		return (
			<div>
				<h2>Modal Login Form</h2>

				<button>Login</button>

				<div id="id01" className="modal">

					<form className="modal-content animate" action="/action_page.php">
						<div className="imgcontainer">
							<span className="close" title="Close Modal">&times;</span>
							<img src="img_avatar2.png" alt="Avatar" className="avatar" />
						</div>

						<div className="container">
							<label><b>Username</b></label>
							<input type="text" placeholder="Enter Username" name="uname" required />

								<label><b>Password</b></label>
								<input type="password" placeholder="Enter Password" name="psw" required />

									<button type="submit">Login</button>
									<label>
										<input type="checkbox" checked="checked" name="remember" /> Remember me
									</label>
						</div>

						<div className="container" style={styles}>
							<button type="button" className="cancelbtn">Cancel</button>
							<span className="psw">Forgot <a href="#">password?</a></span>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default ChatLoginPage;
