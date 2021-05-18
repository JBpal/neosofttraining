//import { getMaxListeners } from 'node:process'
import {applyMiddleware, createStore} from 'redux'
import demo from "./reducers"
import {logger} from "./middlewares"
import createSaga from 'redux-saga'
import {LoginSaga, RootSaga} from "./sagas"
import thunk from "redux-thunk";

//console.log("mayur is testing")

var sagaMiddleware = createSaga()
var middlewares = applyMiddleware(sagaMiddleware, thunk)
export default createStore(demo, middlewares)
//sagaMiddleware.run(RootSaga)
