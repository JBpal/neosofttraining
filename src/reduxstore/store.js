//import { getMaxListeners } from 'node:process'
import {applyMiddleware, createStore} from 'redux'
import demo from "./reducers"
import {logger} from "./middlewares"
var middlewares = applyMiddleware(logger)
export default createStore(demo, middlewares)
