//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
/* import cakes from './cakedata';
import Cake from './Cake'; */
import Login from './Login';
import {useState} from 'react';
import CakeDetails from './CakeDetails';
import Signup from './Signup';

import Carousel from './Carousel';
import Search from './Search';
import Pagenotfound from './Pagenotfound';
import {BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  var [login,setLogin]=useState(false);
var [show,setShow]=useState(false);
var [com,setCom]=useState({});
  let showDetails=(data)=>{
    setShow(true)
    setCom(data)
}
  return (
  <div className="app">
    
    <Router>
    <Navbar islogin={login} setlogin={setLogin} />
      <div>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/search" exact component={Search} />
        <Route path="/cake/:cakeid" exact component={CakeDetails} />
        <Route path="/*">
          <Redirect to="/Pagenotfound"></Redirect>
        </Route>
        </Switch>
      </div>
    </Router>



    {/* <Navbar islogin={login} setlogin={setLogin} />
    <Carousel />
    <Signup></Signup>
    <Login islogin={login} setlogin={setLogin}/>
    <Search />
    <Home /> */}
    
    {/* {show?<CakeDetails  cdata={com}/>:''} */}
    {/* <div className="row">
        
        {cakes.length>0 && cakes.map((each,index)=>{
          return(<Cake cake={each} showdetails={showDetails} cakedata={each} key={index}/>)
        })}
      
     </div> */}
      {/* let apiUrl = "https://apibyashu.herokuapp.com/api/allcakes"
    console.log(apiUrl);
       axios({
           method:"get",
           url:apiUrl,
       }).then((response)=>{
        console.log("response form signup api",response.data);
       },(error)=>{
        console.log("Error form aignup api",error)
       }) */}
   
  </div>
    
    
    

  );
}

export default App;
