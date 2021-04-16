import Cake from './Cake';
import axios from 'axios';
import {useEffect, useState} from 'react';

function Search(props){
  console.log("sdfsefserse..............", props)
let [cakeresult, setCakes] = useState([])
let searchcakesapi = "http://apibyashu.herokuapp.com/api/searchcakes"+props.location.search
useEffect(()=>{
  axios({
    method:"get",
    url:searchcakesapi,
  }).then((response)=>{
    console.log("response from search cakes api", response.data)
    setCakes(response.data.data)
  },(error)=>{
    console.log("error from search cakes api", error)
  })
},[searchcakesapi])

return (
    <div className="container">
        <div className="row">
        {cakeresult?.length>0 ? cakeresult.map((each,index)=>{
          return(<Cake cake={each} key={index}/>)
        }) : <div className="alert alert-danger">No Results found for your search. Try other cakes</div>}
        </div>
    </div>
);

}



export default Search;