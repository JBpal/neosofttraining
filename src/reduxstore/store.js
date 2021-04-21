//import { getMaxListeners } from 'node:process'
import {createStore} from 'redux'
import demo from "./reducers"
export default createStore(demo)
