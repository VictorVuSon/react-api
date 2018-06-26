import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
const superagent = superagentPromise(_superagent, global.Promise);

export default class AgentRequest {
    
	static setRequestMiddleware(req) {
		// if (token) {
		// 	req.set('authorization', `Bearer ${token}`);
		// }
	};
	static request (method, url, data) {
		switch (method) {
			case 'GET':
				return AgentRequest.get(url);
			case 'POST':
				return AgentRequest.post(url, data);
			case 'PUT':
				return AgentRequest.put(url, data);
			case 'DELETE':
				return AgentRequest.delete(url);
			default:
				return;
		}
	}
	static get = (url) => {
		return superagent.get(url).then(res => res);
	};
	static post = (url, body) => {
        return superagent
            .post(`${url}`, body)
            .use(AgentRequest.setRequestMiddleware)
            .then(res => res);
	};
	static put = (url, body) => {
		return superagent
			.put(`${url}`, body)
			.use(AgentRequest.setRequestMiddleware)
			.then(res => res);
	};
    static delete = (url) => {
	    return superagent
		    .delete(`${url}`)
		    .use(AgentRequest.setRequestMiddleware)
		    .then(res => res);
    }

}
