import {useState} from "react";
import axios from "axios";

const Forgot=()=>{

    var emaildata = {}
    var [emaildata, setEmailpdata]=useState({})

    let getEmail=(event)=>{
        setEmailpdata({
            ...emaildata,
            email:event.target.value
        })
        //user.email=event.target.value;
    }


    var [formErrors , SetformErrors] = useState({})
    var validateReg = function(elements){
        //console.log("form elements" , elements)
        var errors = {} 
        var emailpattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

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

    let password = function(){
        //console.log("this is a test register", emaildata)
        var form = document.getElementById('emailform');
        var errors = validateReg(form.elements)
        if(errors){
             SetformErrors(errors)
        }else{
         SetformErrors({})
         //console.log("checking siginup error", emaildata);
            let apiUrl = process.env.REACT_APP_BASE_URL + "recoverpassword"
         axios({
                url:apiUrl,
                method:"post",
                data:emaildata
            }).then((response)=>{
                //console.log("response form signup api",response.data);
            },(error)=>{
                console.log("Error form signup api",error)
            })
            //console.log("...user details" ,emaildata)
        }
        
    }

    
        return(
            <div style={{"width":"50%","margin":"auto"}}>
                <center><div>Forgot Password</div></center>
                <form id="emailform">
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" onChange={getEmail}></input>                    
                    <div className="form-error" style={{"color":"red"}}>
                        {formErrors?.email && <div> {formErrors.email}</div> }
                    </div>
                </div>
                
                <button type="button" className="btn btn-primary" onClick={password}>Enter Email</button>
                </form>
            </div>

        );
       
    
}

export default Forgot