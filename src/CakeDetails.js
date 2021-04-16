import {useParams} from "react-router-dom"
import {useEffect, useState} from 'react';
import axios from 'axios'

function CakeDetails(){
    let [cakedetails, setCakedetails] = useState({})
    let params = useParams()
    console.log("Params are ", params)
    //alert(params.cakeid)
    useEffect(()=>{
        let cakedetailsapi="https://apibyashu.herokuapp.com/api/cake/"+params.cakeid
        axios({
            method:"get",
            url:cakedetailsapi
        }).then((response)=>{
            setCakedetails(response.data.data)
            console.log(response.data.name)
        },(error)=>{
            console.log("Error form cakedetail api", error)
        })
    },[])

    return (
        <div>
            <div className="card mb-5" style={{"max-width":"600px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={cakedetails.image} alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                <h5>Name :</h5><h5 className="card-title">{cakedetails.name}</h5>
                    <p className="card-text">{cakedetails.description}</p>
                    <p className="card-text"><small className="text-muted">{cakedetails.price}</small></p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default CakeDetails;