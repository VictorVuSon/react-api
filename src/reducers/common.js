import { ACTIONS } from '../actions';

const common = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.COMMON.CLEAR_ALERT:
            return {...state, message: ''};

        case ACTIONS.PRODUCT.ADD_PRODUCT:
            // if (action.payload) {
            //     return {...state, message: 'Success'}
            // }
            return state;

        default: return state;

    }

};

export default common;