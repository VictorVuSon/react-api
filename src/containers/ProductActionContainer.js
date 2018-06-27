import ProductActionPage from '../pages/ProductActionPage';
import {connect} from 'react-redux';
import Agent from '../utils/Agent.js';
import {ACTIONS} from '../actions';
import {API_URL} from '../env.json';

const mapDispatchToProps = (dispatch) => {
	return {
		onEditProduct : (id) => {
			return dispatch({ type: ACTIONS.PRODUCT.EDIT_PRODUCT, payload: Agent.request('GET', API_URL + `/${id}`) });
		},
		onUpdateProduct: (data) => {
			return dispatch({ type: ACTIONS.PRODUCT.UPDATE_PRODUCT, payload: Agent.request('PUT', API_URL + `/${data.id}`, data) });
		},
		onAddProduct: (data) => {
			return dispatch({ type: ACTIONS.PRODUCT.ADD_PRODUCT, payload: Agent.request('POST', API_URL, data) });
		}
	}
};

const mapStateToProps = state => {
	return {
		itemEditing: state.itemEditing,
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
