import { combineReducers } from 'redux';
import products from './products';
import itemEditing from './itemEditing'
import common from './common';

const appReducers = combineReducers({
	products,
	itemEditing,
	common
});

export default appReducers;