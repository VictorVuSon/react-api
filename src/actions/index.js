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

export const actAddProductRequest = (data) => {
	return dispatch => {
		return Request.callAPI('POST', 'http://5afd483e2cfff500145ad8cb.mockapi.io/api/v1/product', data)
			.then(res => {
				if (res.status === 200) {
					dispatch(actAddProduct(res.data));
				}
			});
	};
};

export const actGetProductRequest = (id) => {
	return dispatch => {
		return Request.callAPI('GET', 'http://5afd483e2cfff500145ad8cb.mockapi.io/api/v1/product/' + id)
			.then(res => {
				if (res.status === 200) {
					dispatch(actGetProduct(res.data));
				}
			});
	};
};

export const actUpdateProductRequest = (product) => {
	return dispatch => {
		return Request.callAPI('PUT', 'http://5afd483e2cfff500145ad8cb.mockapi.io/api/v1/product/' + product.id, product)
			.then(res => {
				if (res.status === 200) {
					dispatch(actUpdateProduct(res.data));
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

export const actAddProduct = (product) => {
	return {
		type : Types.ADD_PRODUCT,
		product
	}
};
export const actGetProduct = (product) => {
	return {
		type : Types.EDIT_PRODUCT,
		product
	}
};

export const actUpdateProduct = (product) => {
	return {
		type: Types.UPDATE_PRODUCT,
		product
	}
};





