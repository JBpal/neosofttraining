import axios from "axios"

//login think
export function loginUser(user){
return function(dispatch, getState){
    //console.log("this is only a test")
    dispatch({
        type:"LOGIN"
    })
    //console.log("check state of thunk", getState())
    var state = getState()
    axios({
        method:"post",
        url:process.env.REACT_APP_BASE_URL + "login",
        data:user
    }).then((response)=>{
        if(response.data.token){
            //console.log("response check", response)
            /* localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', response.data.email); */
            localStorage.token = response.data.token
            //localStorage.email = response.data.email
            dispatch({
                type:"LOGIN_SUCCESS",
                payload:response.data
            })
            
        }
    })
}
}

//orderdetails thunk
export function orderDetails(){
    return function(dispatch, getState){
        console.log("this is only a test")
        /* dispatch({
            type:"CAKE_ORDER"
        }) */
        console.log("check state of thunk", getState())
        //var state = getState()
        /* useEffect(() =>{ */
            var token = localStorage.token
                axios({
                  method:'post',
                  url:process.env.REACT_APP_BASE_URL + 'cakeorders',
                  headers:{
                    authtoken:token
                  }
                }).then((response)=>{
                  console.log("response from cakeorders", response)
        
                  dispatch({
                    type:"CAKE_ORDER",
                    payload:response.data
                })
            
                }, (error)=>{
              console.log("error from get user details api", error)
                })
              /* },[]) */
    }
    }