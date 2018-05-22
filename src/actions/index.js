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

export const actFetchProducts = (products) => {
	return {
		type : Types.FETCH_PRODUCTS,
		products
	}
};
