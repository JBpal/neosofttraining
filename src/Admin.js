import Cake from "./Cake"
//import Carousel from "./Carousel"
import axios from 'axios'
import {useEffect, useState} from 'react';

function Admin(){
    //const [cakes, setCakes] = useState([])
    //const [loading, setLoading] = useState(false)
    //const [currentPage, setCurrentPage] = useState(1);
    //const [cakesPerPage, setCakesPerPage] =- useState(10);

let [cakes, setCakes] = useState([])
let allcakesapi = process.env.REACT_APP_BASE_URL + "allcakes"
useEffect(()=>{
  axios({
    method:"get",
    url:allcakesapi,
  },[]).then((response)=>{
    //console.log("response from all cakes api", response.data)
    setCakes(response.data.data)
    //setLoading(false)
  },(error)=>{
    console.log("error from all cakes api", error)
  })
},[])
console.log(cakes)


    return(
        <div>
        {/* <Carousel></Carousel> */}
        <div className="row">
          {cakes.length>0 && cakes.map((each,index)=>{
            return(<Cake cake={each} key={index} />)
          })}
        </div>
      </div>
    )
}
export default Admin