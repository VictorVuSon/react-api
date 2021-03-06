import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {promiseMiddleware} from './middleware';
import reducer from './reducers';


const getMiddleware = () => {
    // if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(promiseMiddleware);
    // } else {
        // Enable additional logging in non-production environments.
        // return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, createLogger())
    // }
};

export const store = createStore(reducer, composeWithDevTools(getMiddleware()));
