import React from 'react';
import HomePage from "./pages/home_page/HomePage";
import NotFound from "./pages/not_found_page/NotFound";
import ProductListPage from "./pages/product_list_page/ProductListPage";
import ActionProductPage from "./pages/product_action_page/ActionProductPage";
import ChatLoginPage from './pages/chat_room/ChatLoginPage';
import ForgotPasswordPage from "./pages/chat_room/ForgotPasswordPage";

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