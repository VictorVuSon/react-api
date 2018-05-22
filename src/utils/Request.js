import Axios from 'axios';

export default class Request {
	static callAPI (method, url, data) {
		return new Promise((resolve, reject) => {
			Axios({
				method: method,
				url: url,
				data: data
			})
				.then(res => resolve(res))
				.catch(error => reject(error))
		});
	}
}