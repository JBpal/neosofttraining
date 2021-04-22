
import axios from "axios";
import { Component } from "react";


class Signup extends Component{
    constructor(){
        super()
        this.state = {
            onlineUsers:0
        }
    }
    user = {}

    /* getEmail = (event) => {
        this.user.email = event.target.value
       // console.log("event Value",event.target.value)
    }

    getPassword = (event)=>{
        event.preventDefault();
        this.user.password =event.target.value
    }

    getname = (event)=>{
       // event.preventDefault();
        this.user.name =event.target.value
    } */

    

    register = () =>{
        if(!this.user.email || !this.user.password || !this.user.name){
            this.setState({
                errorMessage:"please Fill Details"
            })
        }else{
            let apiUrl = "https://apibyashu.herokuapp.com/api/register"
         axios({
                url:apiUrl,
                method:"post",
                data:this.user
            }).then((response)=>{
                console.log("response form signup api",response.data);
            },(error)=>{
                console.log("Error form aignup api",error)
            })
            console.log("...user details" ,this.user)
        }
        
    }

    render(){
        return(

            <div style={{width:"50%",margin:"auto"}}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" ></input>
                </div>
                <div className="form-group">
                    <label>name</label>
                    <input type="text" className="form-control" ></input>
                </div>
                <div className="form-group">
                    <label>password</label>
                    <input type="password" className="form-control" ></input>
                </div>
                <div style={{color:"red"}}>
                    {this.state.errorMessage}
                </div>
                <button type="button" className="btn btn-primary" onClick={this.register}>Register</button>
            </div>

            // <div>
            // users {this.state.onlineUsers}
            // <input onChange={this.getEmail}></input>
            // <button onClick={this.goOnline}>Go online</button>
            // </div>
        )
       
    }
}

export default Signup