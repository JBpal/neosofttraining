import axios from 'axios'
import {useState} from 'react'
import { Link, withRouter } from 'react-router-dom'
import {connect} from "react-redux"
import {loginUser} from "./reduxstore/thunk"

function Login(props){ 
    
    if(props?.loginstatus==true){
        props.history.push("/")
    }
    
    var [formErrors , SetformErrors] = useState({})
    var validateLogin = function(elements){
        var errors = {} 
        var emailpattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
       
        if(!elements.password.value){
            errors.password ="Password is Required"
        }
        if(!elements.email.value){
            errors.email ="Email is Required"
        }
        else if (!emailpattern.test(elements.email.value)) {
            errors.email ="Please Enter Valid Email id"
        }
        
        var errorKeys = Object.keys(errors)
        if(errorKeys.length > 0)
        return errors
        else
        return false 
    }

    
    var user = {}
    var [error,setError]=useState()
   
    var [user, setUser]=useState({})
    let getEmail=(event)=>{
        setUser({
            ...user,
            email:event.target.value
        })
        //user.email=event.target.value;
    }

    let getPassword=(event)=>{
        setUser({
            ...user,
            password:event.target.value
        })
        //user.password=event.target.value;
    }

    let login=function(){
        
        var form = document.getElementById('loginform');
        var errors = validateLogin(form.elements)
        if(errors){
             SetformErrors(errors)
        }else{
         SetformErrors({})
    
        props.dispatch(loginUser(user)  /* {
            type:"LOGIN",
            payload:user
        } */)
        //props.history.push("/")
    }

        /* var form = document.getElementById('loginform');
        var errors = validateLogin(form.elements)
        if(errors){
             SetformErrors(errors)
        }else{
         SetformErrors({})
        //console.log(user);
        let apiUrl = "https://apibyashu.herokuapp.com/api/login"
        //console.log(apiUrl);
           axios({
               method:"post",
               url:apiUrl,
               data:user
           }).then((response)=>{
            //console.log("response form signup api",response.data);

            if(response.data.token){
                localStorage.token = response.data.token
                localStorage.email = response.data.email

                //below code will go to dispatch
                props.dispatch({
                    type:"LOGIN",
                    payload:response.data
                })
                //above code will go to dispatch
                
                props.history.push("/")
            }
            else{
                setError("Invalid credentials")
            }

           },(error)=>{
            console.log("Error frorm signup api",error)
           })
       } */
    }
    return(
        <div>
            {/* {!props.islogin? */}<><h3 className="text-center">Login</h3>
            <div style={{"width":"50%", "margin":"auto"}}>
                <form id="loginform">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" onChange={getEmail} name="email"></input>
                        <div className="form-error" style={{color:"red"}}>
                        {formErrors?.email && <div> {formErrors.email}</div> }
                    </div>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" onChange={getPassword} name="password"></input>
                        <div className="form-error" style={{color:"red"}}>
                        {formErrors?.password && <div> {formErrors.password}</div> }
                    </div>    
                    </div>
                    {props.error && <div className="text-danger" style={{color:"red"}}>
                        Invalid Credentials
                    </div> }
                    </form>
                    <div style={{"float":"right"}}>
                        <Link to="/forgot">Forgot Password ?</Link>
                    </div>
                    <div>
                        <Link to="/signup">New User? Click here</Link>
                    </div>
                    
                    <button className="btn btn-primary" onClick={login}>Login</button>
                </div></>{/* :''} */}
            
        </div>
    )
}
Login = withRouter(Login)
export default connect((state, props)=>{
    console.log("state of store in login component", state)
    return{
        //user: state?.user?.name,
        //loginstatus: state?.isloggedin,
        loginstatus: state["isloggedin"],
        error:state["isloginerror"]
    }
})(Login)
//above line added props to login component known as dispatch