import * as Types from './../constants/action-types';

const initialState = [];

const products = (state = initialState, action) => {

	switch (action.type) {
		case Types.FETCH_PRODUCTS:
			return [...state, ...action.products];
		case Types.DELETE_PRODUCT:
			const id = action.id;
			const index = getIndex(id, state);
			if (index !== -1) {
				state.splice(index, 1);
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