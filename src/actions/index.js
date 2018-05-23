import * as Types from './../constants/action-types';
import Request from './../utils/Request';

export const actFetchProductsRequest = () => {
	return dispatch => {
		return Request.callAPI('GET', 'http://5afd483e2cfff500145ad8cb.mockapi.io/api/v1/product')
			.then(res => {
				dispatch(actFetchProducts(res.data));
		});
	};
};

export const actDeleteProductRequest = (id) => {
	return dispatch => {
		return Request.callAPI('DELETE', 'http://5afd483e2cfff500145ad8cb.mockapi.io/api/v1/product/' + id)
			.then(res => {
				if (res.status === 200) {
					dispatch(actDeleteProduct(id));
				}
			});
	};
};

export const actFetchProducts = (products) => {
	return {
		type : Types.FETCH_PRODUCTS,
		products
	}
};

export const actDeleteProduct = (id) => {
	return {
		type : Types.DELETE_PRODUCT,
		id
	}
};
