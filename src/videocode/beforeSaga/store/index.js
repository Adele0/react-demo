import { createStore, compose, applyMiddleware } from 'redux';
// redux-thunk中间件
// import thunk from 'redux-thunk';
// redux-saga中间件
import createSagaMiddleware from 'redux-saga';
import Sagas from './sagas';

import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeEnhancers(
	// 使用thunk
	// applyMiddleware(thunk)
	// 使用saga
	applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(Sagas)

export default store;