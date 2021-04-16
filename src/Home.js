import Cake from "./Cake"
import Carousel from "./Carousel"
import axios from 'axios'
import {useEffect, useState} from 'react';

// var obj = {
//     name:"cake",
//     image:"cakeImage1.jpeg",
// }


function Home(){
let [cakes, setCakes] = useState([])
let allcakesapi = "http://apibyashu.herokuapp.com/api/allcakes"
useEffect(()=>{
  axios({
    method:"get",
    url:allcakesapi,
  },[]).then((response)=>{
    console.log("response from all cakes api", response.data)
    setCakes(response.data.data)
  },(error)=>{
    console.log("error from all cakes api", error)
  })
},[])


    return(
<div>
  <Carousel></Carousel>
  <div className="row">
    {cakes.length>0 && cakes.map((each,index)=>{
      return(<Cake cake={each} key={index} />)
    })}
  </div>
</div>

        // <h3>Home page</h3>
        // <div>
        //     <Carousel></Carousel>
        //     <div className="col-md-12">
        //         <div className="row">
        //             <Cake cakeData={obj}></Cake>
        //             {/* <Cake></Cake>
        //             <Cake></Cake>
        //             <Cake></Cake>
        //             <Cake></Cake>
        //             <Cake></Cake>
        //             <Cake></Cake> */}
        //         </div>
        //     </div>
        // </div>
    )
}
export default Home