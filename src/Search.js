import Cake from './Cake';
import axios from 'axios';
import {useEffect, useState} from 'react';
import queryString from "query-string";
import {useLocation} from "react-router-dom"

function Search(props){
  //var location = useLocation()
  console.log("....use location", useLocation)

  const parsed = queryString.parse(props.location.search);
    console.log("parsed " , parsed);

let [cakeresult, setCakes] = useState([])
let searchcakesapi = process.env.REACT_APP_BASE_URL + "searchcakes?q="+parsed.searchtext
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
},[props.location.search])

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