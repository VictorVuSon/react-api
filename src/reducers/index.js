import { combineReducers } from 'redux';
import products from './products';
import { reducer as formReducer } from 'redux-form'

const appReducers = combineReducers({
	products,
	form: formReducer
});

export default appReducers;