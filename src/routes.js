import React from 'react';
import HomePage from "./pages/home_page/HomePage";
import NotFound from "./pages/not_found_page/NotFound";
import ProductListPage from "./pages/product_list_page/ProductListPage";
import AddProductPage from "./pages/product_action_page/AddProductPage";
import UpdateProductPage from "./pages/product_action_page/UpdateProductPage";

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
		main: () => <AddProductPage />
	},
	{
		path: '/product/:id/update',
		exact: true,
		main: () => <UpdateProductPage />
	},
	{
		path: '/product-list',
		exact: true,
		main: () => <ProductListPage />
	},
	{
		path: '',
		exact: false,
		main: () => <NotFound />
	}
];

export default routes;