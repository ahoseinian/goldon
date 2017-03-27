import {createStore, applyMiddleware} from 'redux'
import goldonApp from './reducers'
// import createLogger from 'redux-logger'
import createPromiseMiddleware from 'redux-promise-middleware'

// const logger = createLogger({collapsed: true});
const promiseMiddleware = createPromiseMiddleware();
const store = createStore(goldonApp, applyMiddleware(promiseMiddleware))


export default store
