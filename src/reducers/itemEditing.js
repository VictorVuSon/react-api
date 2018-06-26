import { ACTIONS } from '../actions';

let initialState = {};

const itemEditing = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.PRODUCT.EDIT_PRODUCT:
            return {...action.payload.body.data};
        default:
            return state;
    }
};

export default itemEditing;
