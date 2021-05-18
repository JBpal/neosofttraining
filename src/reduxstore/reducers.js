var demo = function(state={
    user:null
}, action){
switch(action.type){

    case "LOGIN":{
        console.log("Login started")
        state = {...state}
        state["isfetching"] = true
        //state["isloginerror"] = false
        return state
    }

    case "LOGIN_SUCCESS":{
        state = {...state}
        state["isloggedin"] = true
        state["user"] = action.payload
        state["isfetching"] = false
        state["isloginerror"] = false
        return state
    }

    case "LOGIN_FAILURE":{
        state = {...state}
        state["isfetching"] = false
        state["isloginerror"] = true
        return state
    }

    case "INITIALISE_USER":{
        state = {...state}
        state["isloggedin"] = true
        state["user"] = action.payload
        return state
    }
    case "UPDATE_CART":{
        state = {...state}
        state["updatecart"] = action.payload
        return state
    }

    case "CART":{
        state = {...state}
        state["cart"] = { data:action.payload}
        console.log("here we have to write logic for cart", state["cart"])
        return state
    }

    case "PLACE_ORDER":{
        state = {...state}
        state["placeorder"] = action.payload
        return state
    }

    case "CAKE_ORDER":{
        state = {...state}
        state["orderdetails"] = action.payload
        console.log("all order details", state["orderdetails"])
        return state
    }
    case "ADD_COUNTER":{
        state = {...state}
        state["updatecounter"] = action.counter
        return state
    }

    /* case "REMOVECART":{
        state = {...state}
        delete state["removecart"]
        console.log("here we have to write logic for delete cakes", state["removecart"])
        return state
    } */

    case "LOGOUT":{
        state = {...state}
        localStorage.clear()
        delete state["user"]
        delete state["isloggedin"]
        return state
    }
    default : return state
}
}
export default demo