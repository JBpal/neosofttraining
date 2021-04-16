import axios from 'axios'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function Login(props){
    console.log(".............props for login", props)
    // useEffect(()=>{
    //     alert('Mounted and Updated')
    // },[])
    var [error,setError]=useState('')
   
    var [user, setUser]=useState({})
    let getEmail=(event)=>{
        setUser({
            ...user,
            email:event.target.value
        })
        user.email=event.target.value;
    }

    let getPassword=(event)=>{
        setUser({
            ...user,
            password:event.target.value
        })
        user.password=event.target.value;
    }

    let login=function(){
       
    if(!user.email && !user.password)
       {
        setError("Please enter valid credentials")
        
       }else{
        console.log(user);
        let apiUrl = "https://apibyashu.herokuapp.com/api/login"
        console.log(apiUrl);
           axios({
               method:"post",
               url:apiUrl,
               data:user
           }).then((response)=>{
            console.log("response form signup api",response.data);

            if(response.data.token){
                localStorage.token = response.data.token
                localStorage.email = response.data.email
                props.history.push("/")
            }

           },(error)=>{
            console.log("Error form aignup api",error)
           })
       // console.log(user)
       props.setlogin(true)
        //props.islogin(true)
       // setError("")
       }
    }
    return(
        <div>
            {!props.islogin?<><h3 className="text-center">Login</h3>
            <div style={{"width":"50%", "margin":"auto"}}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" onChange={getEmail}></input>
                    {user.email}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" onChange={getPassword}></input>
                        {user.password}    
                    </div>
                    <div className="text-danger" style={{color:"red"}}>
                        {error}
                    </div>
                    <div style={{float:'right'}}>
                        <Link to="/forgot">Forgot Password ?</Link>
                    </div>
                    <div>
                        <Link to="/signup">New User? Click here</Link>
                    </div>
                    
                    <button className="btn btn-primary" onClick={login}>Login</button>
                </div></>:''}
            
        </div>
    )
}

export default Login