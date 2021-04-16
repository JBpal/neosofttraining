import { Link } from "react-router-dom";
import {useState} from 'react';

function Navbar(props) {

  let [searchquery, setSearchquery] = useState()

  var counter=0;
  let url ="";
   function search(event){
    event.preventDefault()
    counter++;
    console.log(counter)
    console.log("search ",event)
  }
  
  let onLogin=()=>{
    props.setlogin(true)
}

let onLogout=()=>{
    props.setlogin(false)
}

let getCakeid = (event)=>{
  console.log(event.target.value)
  setSearchquery(event.target.value)
  //this.user.name =event.target.value
}

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/"><a className="navbar-brand">My Cakeshop</a></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     {/*  <li className="nav-item active">
        <a className="nav-link" href={url}>Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={url}>Link</a>
      </li> */}
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href={url}>Action</a>
          <a className="dropdown-item" href={url}>Another action</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href={url}>Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href={url} tabIndex={-1} aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" onChange={getCakeid} type="search" placeholder="Search" aria-label="Search" />
      <Link to={`/search?q=${searchquery}`}><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>
    
    {props.islogin ? <div><button onClick={onLogout} className="btn btn-primary">Logout</button>
    </div>:<div>
    <Link to="/login"><button onClick={onLogin} className="btn btn-primary">Login</button></Link></div>}
    </form>
  </div>
</nav>

  )
}

export default Navbar;