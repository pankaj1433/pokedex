import { createStore ,applyMiddleware, compose } from 'redux'
import { rootReducer } from './reducers'
import { middleware } from  './middlewares'

const Middleware = applyMiddleware(...middleware);
let store = createStore(
    rootReducer,
    global.window.__REDUX_DEVTOOLS_EXTENSION__ && global.window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(Middleware)
);


export default store;