import ProductListPage from '../pages/ProductListPage';
import {connect} from 'react-redux';
import Agent from '../utils/Agent.js';
import {ACTIONS} from '../actions';
import { API_URL } from '../env.json';

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAllProducts : () => {
			return dispatch({ type: ACTIONS.PRODUCT.FETCH_PRODUCTS, payload: Agent.request('GET', API_URL) });
		},
		onDeleteProduct: (id) => {
			return dispatch({ type: ACTIONS.PRODUCT.DELETE_PRODUCT, payload: Agent.request('DELETE', API_URL + `/${id}`) });
		},
        onClearAlert: () => {
            return dispatch({ type: ACTIONS.COMMON.CLEAR_ALERT });
        }
	}
};

const mapStateToProps = state => {
	return {
		products: state.products
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
