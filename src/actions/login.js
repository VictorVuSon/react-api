import * as Types from './../constants/action-types';
import Request from './../utils/Request';

export const requestLogin = () => {
	return dispatch => {
		return Request.callAPI('GET', 'http://5afd483e2cfff500145ad8cb.mockapi.io/api/v1/product')
			.then(res => {
				dispatch(login(res.data));
			});
	};
};

export const login = (data) => {

};