import * as Types from './../constants/action-types';

const initialState = [];

const products = (state = initialState, action) => {

	switch (action.type) {
		case Types.FETCH_PRODUCTS:
			return [...action.products];
		case Types.DELETE_PRODUCT:
			const id = action.id;
			const index = getIndex(id, state);
			if (index !== -1) {
				state.splice(index, 1);
			}
			return [...state];
		case Types.ADD_PRODUCT:
			return [...state, action.product];

		case Types.UPDATE_PRODUCT:
			const updatedProductIndex = getIndex(action.product.id, state);
			if (updatedProductIndex !== -1) {
				state[updatedProductIndex] = action.product;
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