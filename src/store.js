import {createStore, applyMiddleware} from 'redux'
import goldonApp from './reducers'
import createLogger from 'redux-logger'
import createPromiseMiddleware from 'redux-promise-middleware'
import {getAllItems} from './actions/index'

const logger = createLogger({collapsed: true});
const promiseMiddleware = createPromiseMiddleware();
const store = createStore(goldonApp, applyMiddleware(logger, promiseMiddleware))

store.dispatch(getAllItems())

export default store
