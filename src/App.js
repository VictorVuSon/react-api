import React, {Component} from 'react';
import Menu from './components/menu/Menu';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import MessageAlert from './components/alert/Message';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        message: state.common && state.common.message,
    }
};

class App extends Component {
	render() {
		const { message } = this.props;
		return (
			<div>
				<MessageAlert message={message} />
				<Router>
					<div>
						<Menu/>
						<div className="container">
							<div className="row">
                                { this.showContentMenus(routes) }
							</div>
						</div>
					</div>
				</Router>
			</div>
		);
	}

	showContentMenus = () => {
		let result = null;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				return (<Route
					key={index}
					path={route.path}
					exact={route.exact}
					component={route.main}
				/>);
			});
		}
		return <Switch>{ result }</Switch>
	}
}

export default connect(mapStateToProps)(App);
