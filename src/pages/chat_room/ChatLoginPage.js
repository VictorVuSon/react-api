import React, { Component } from 'react';

const styles = {
	backgroundColor: '#f1f1f1',
};

class ChatLoginPage extends Component {
	render() {
		return (
			<div>
				<form action="">
					<div className="imgcontainer">
						<img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar" />
					</div>

					<div className="container">
						<label><b>Username</b></label>
						<input type="text" placeholder="Enter Username" name="uname" required />

						<label><b>Password</b></label>
						<input type="password" placeholder="Enter Password" name="psw" required />

						<button type="submit">Login</button>
						<label>
							<input type="checkbox" name="remember" /> Remember me
						</label>
					</div>
					<div className="container" style={styles}>
						<button type="button" className="cancelbtn">Cancel</button>
						<span className="psw">Forgot <a href="">password?</a></span>
					</div>
				</form>
			</div>
		);
	}
}

export default ChatLoginPage;
