const promiseMiddleware = store => next => action => {
    if (isPromise(action.payload)) {
        // store.dispatch(store.getState());

        // const currentView = store.getState().viewChangeCounter;
        // const skipTracking = action.skipTracking;

        action.payload.then(
            res => {
                // const currentState = store.getState();
                // if (!skipTracking && currentState.viewChangeCounter !== currentView) {
                //     return
                // }
                // console.log('RESULT', res);
                action.payload = res.body.data;
                // store.dispatch({ type: COMMON.ASYNC_END, promise: action.payload });
                store.dispatch(action);
            },
            error => {
                action.error = error.response ? error.response.body : error.response;
                store.dispatch(action);
            }
        );
        return;
    }
    next(action);
};

function isPromise(v) {
    return v && typeof v.then === 'function';
}

export { promiseMiddleware }
