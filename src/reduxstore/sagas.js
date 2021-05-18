import axios from "axios"
import {call, put, takeEvery} from "redux-saga/effects"

function login(action){
    return axios({
        method:"post",
        url:process.env.REACT_APP_BASE_URL + "login",
        data:action.payload
    })
}

function* LoginGenerator(action){
    var result = yield call(login, action)
    if(result.data.token){
        yield put({type:"LOGIN_SUCCESS", payload:result.data})
        localStorage.token = result.data.token
        localStorage.email = result.data.email
        yield put({type :"UPDATE_CART",payload:false})
    }
    else{
        yield put({type:"LOGIN_FAILURE"})
    }
}

export function* RootSaga(){
    yield takeEvery('LOGIN', LoginGenerator)
}
