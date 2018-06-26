import React from 'react';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import ProductListPage from './containers/ProductListContainer';
import ActionProductPage from './containers/ProductActionContainer';
import ChatLoginPage from './pages/ChatLoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

const routes = [
	{
		path: '/',
		exact: true,
		main: () => <HomePage />
	},
	{
		path: '/product-list',
		exact: true,
		main: () => <ProductListPage />
	},
	{
		path: '/product/add',
		exact: true,
		main: ({history}) => <ActionProductPage history={history}/>
	},
	{
		path: '/product/:id/update',
		exact: true,
		main: ({match, history}) => <ActionProductPage match={match} history={history}/>
	},
	{
		path: '/product-list',
		exact: true,
		main: () => <ProductListPage />
	},
	{
		path: '/chat-room',
		exact: true,
		main: () => <ChatLoginPage />
	},
	{
		path: '/forgot-password',
		exact: true,
		main: () => <ForgotPasswordPage />
	},
	{
		path: '',
		exact: false,
		main: () => <NotFound />
	}
];

export default routes;