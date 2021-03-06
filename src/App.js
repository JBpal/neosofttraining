//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
/* import cakes from './cakedata';
import Cake from './Cake'; */
import Login from './Login';

import CakeDetails from './CakeDetails';
import Signup from './Signup';
import React, {Suspense} from 'react';
/* import {useState} from 'react';
import Carousel from './Carousel';
import Pagenotfound from './Pagenotfound';
import store from './reduxstore/store'; */
import Search from './Search';

import {BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import axios from "axios"
import { connect } from 'react-redux';
import Cart from './Cart';
import Checkout from './Checkout';
import Forgot from './Forgot';

//lazyloading admin
var Suspendedadmin = React.lazy(()=>import('./Admin'))


function App(props) {

  if(localStorage.token && !props.user){
    var token = localStorage.token
    //console.log("Mean user is already logged in")
    axios({
      method:'get',
      url:process.env.REACT_APP_BASE_URL + 'getuserdetails',
      headers:{
        authtoken:token
      }
    }).then((response)=>{
      //console.log("response from get user details api", response)

      props.dispatch({
        type:"LOGIN_SUCCESS",
        payload:response.data.data
    })

    }, (error)=>{
  console.log("error from get user details api", error)
    })
  }

  return (
  <div className="app">
    
    <Router>
    <Navbar />
      <div>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact><Login /></Route>
        <Route path="/signup" exact component={Signup} />
        <Route path="/forgot" exact component={Forgot} />
        <Route path="/search" exact component={Search} />

        {/* lazyloading admin */}
        <Route path="/admin" exact >
          <Suspense fallback={<div>Loading....</div>}>
            <Suspendedadmin />
          </Suspense>
        </Route>

        <Route path="/cart" exact component={Cart} />
        <Route path="/checkout" component={Checkout}></Route>
        {/* {store.isloggedin? <Route path="/checkout" component={Checkout}></Route>: ''} */}
        <Route path="/cake/:cakeid" exact component={CakeDetails} />
        
        <Route path="/*">
        <Redirect to="/Pagenotfound"></Redirect>
        </Route>
        </Switch>
      </div>
    </Router>

   
  </div>
    
    
    

  );
}

//export default App;
export default connect(function(state,props){
  return{
    user:state?.user
  }
})( App);
