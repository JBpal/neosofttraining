import {useState} from "react";
import axios from "axios";
//import { Component } from "react";
//import { connect } from "react-redux"


function Signup(){

    //var signupdata = {}
    var [signupdata, setSignupdata]=useState({})

    let getEmail=(event)=>{
        setSignupdata({
            ...signupdata,
            email:event.target.value
        })
        //user.email=event.target.value;
    }

    let getName=(event)=>{
        setSignupdata({
            ...signupdata,
            name:event.target.value
        })
        //user.name=event.target.value;
    }

    let getPassword=(event)=>{
        setSignupdata({
            ...signupdata,
            password:event.target.value
        })
        //user.password=event.target.value;
    }

    var [formErrors , SetformErrors] = useState({})
    var validareReg = function(elements){
        //console.log("form elements" , elements)
        var errors = {} 
        var emailpattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        
        if(!elements.name.value){
            errors.name ="Name is Required"
        }
        if(elements.name.value && !elements.name.value.match(/^[a-zA-Z]+$/)){
            errors.name="Only letters required"
          }

        if(!elements.password.value){
            errors.password ="Password is Required"
        }
        if(elements.password.value.length < 4 || elements.password.value.length > 8){
            errors.password ="Password must be 4 to 8 chars long"
        }

        if(!elements.email.value){
            errors.email ="Email is Required"
        }
        else if (!emailpattern.test(elements.email.value)) {
            errors.email ="Please Enter Valid Email"
        }

        var errorKeys = Object.keys(errors)
        if(errorKeys.length > 0)
        return errors
        else
        return false
        
    }

    let register = function(){
        //console.log("this is a test register", signupdata)
        var form = document.getElementById('registerform');
        var errors = validareReg(form.elements)
        if(errors){
             SetformErrors(errors)
        }else{
         SetformErrors({})
         console.log("checking siginup error", signupdata);
            let apiUrl = process.env.REACT_APP_BASE_URL + "register"
         axios({
                url:apiUrl,
                method:"post",
                data:signupdata
            }).then((response)=>{
                console.log("response form signup api",response.data);
            },(error)=>{
                console.log("Error form signup api",error)
            })
            console.log("...user details" ,signupdata)
        }
        
    }

    
        return(
            <div style={{width:"50%",margin:"auto"}}>
                <form id="registerform">
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" onChange={getEmail}></input>                    
                    <div className="form-error" style={{color:"red"}}>
                        {formErrors?.email && <div> {formErrors.email}</div> }
                    </div>
                </div>
                <div className="form-group">
                    <label>name</label>
                    <input type="text" className="form-control" name="name" onChange={getName}></input>
                    <div className="form-error" style={{color:"red"}}>
                        {formErrors?.name && <div> {formErrors.name}</div> }
                    </div>
                </div>
                <div className="form-group">
                    <label>password</label>
                    <input type="password" className="form-control" name="password" onChange={getPassword}></input>
                    <div className="form-error" style={{color:"red"}}>
                        {formErrors?.password && <div> {formErrors.password}</div> }
                    </div>
                </div>
                {/* <div style={{color:"red"}}>
                    {this.state.errorMessage}
                </div> */}
                <button type="button" className="btn btn-primary" onClick={register}>Register</button>
                </form>
            </div>

            // <div>
            // users {this.state.onlineUsers}
            // <input onChange={this.getEmail}></input>
            // <button onClick={this.goOnline}>Go online</button>
            // </div>
        )
       
    
}

export default Signup
//export default connect()(Signup)