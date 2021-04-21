var demo = function(state={
    user:null
}, action){
switch(action.type){
    case "LOGIN":{
        console.log("here we have to write logic for login")
        state = {...state}
        state["isloggedin"] = true
        state["user"] = action.payload
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