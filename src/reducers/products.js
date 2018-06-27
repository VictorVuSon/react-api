import { ACTIONS } from '../actions';

const initialState = [];

const products = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.PRODUCT.FETCH_PRODUCTS:
			return [...action.payload];
		case ACTIONS.PRODUCT.DELETE_PRODUCT:
			const id = action.payload.id;
			const index = getIndex(id, state);
			if (index !== -1) {
				state.splice(index, 1);
			}
			return [...state];
		case ACTIONS.PRODUCT.ADD_PRODUCT:
			return state;

		case ACTIONS.PRODUCT.UPDATE_PRODUCT:
			const updatedProductIndex = getIndex(action.payload.id, state);
			if (updatedProductIndex !== -1) {
				state[updatedProductIndex] = action.payload;
			}
			return [...state];

		default: return [...state];

	}

};

const getIndex = (id, state) => {
	if (state.length > 0) {
		for (let i = 0; i < state.length; i++) {
			if (state[i].id === id) {
				return i;
			}
		}
	}
	return -1;
};
export default products;