import { Link, withRouter } from "react-router-dom";
import {faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'



function Navbar(props) {
  console.log("login detail ",props)
  let [searchquery, setSearchquery] = useState()

  var counter=0;

  let search=function(event){
    event.preventDefault();
    let url="/search?searchtext=" + document.getElementById('txtSearch').value;
    console.log("url " + url)
    props.history.push(url)
  }


  useEffect(() =>{
    var token = localStorage.token
        axios({
          method:'post',
          url:'https://apibyashu.herokuapp.com/api/cakecart',
          headers:{
            authtoken:token
          }
        }).then((response)=>{
          console.log("response from cakecart", response)

          props.dispatch({
            type:"CART",
            payload:response.data.data
        })

        props.dispatch({
          type:"UPDATE_CART",
          payload:true
      })
    
        }, (error)=>{
      console.log("error from get user details api", error)
        })
      },[props?.updatecart])

  /* let url ="";
   function search(event){
    event.preventDefault()
    counter++;
    console.log(counter)
    console.log("search ",event)
  } */
  
  /* let onLogin=()=>{
    props.setlogin(true)
    //props.history.push("/")
}

let onLogout=()=>{
  //console.log(props.islogin)
  console.log("this is only a test", props.islogin)
    //props.setlogin(false)
    localStorage.clear()
    props.history.push("/login")
} */

var logout = (event)=>{
  event.preventDefault()
  props.dispatch({
    type:"LOGOUT"

  })
  props.history.push("/")
}

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/"><a className="navbar-brand">My Cakeshop</a></Link> <br />
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     
      <li className="nav-item">
        {props.user && <a className="nav-link"  tabIndex={-1} aria-disabled="true">
        Welcome {props.user}
        </a>}
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" id="txtSearch" type="search" placeholder="Search" aria-label="Search" ></input>
      <button onClick={search} className="btn btn-outline-primary my-2 my-sm-0" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
      
      </form>
      
      {props.loginstatus ? <div>
        <Link to="/cart" className="btn btn-warning my-2 my-sm-0" type="submit"><FontAwesomeIcon icon={faShoppingCart} />
        <span class="price">
          <i class="fa fa-shopping-cart"></i>
          <b>{props?.cart?.data?.length}</b>
        </span>
        </Link>
        
        <button onClick={logout} className="btn btn-danger">Logout</button>
    </div>:<div>
    <Link to="/login"><button className="btn btn-primary">Login</button></Link></div>}

    
    
  </div>
</nav>

  )
}

Navbar=withRouter(Navbar)
//mapstatetoprops
export default connect(function(state,props){
  console.log("....... state initialy", state)
  return {
    user:state?.user?.name,
    cart:state?.cart,
    updatecart: state?.updatecart,
    //if state then search user in state, if user then search name in user
    loginstatus:state?.isloggedin
  }
})(Navbar)