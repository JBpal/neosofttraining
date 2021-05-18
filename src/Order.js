//import { useState } from "react"
import {useState, useEffect} from 'react';
import { connect } from "react-redux";
import './Orderfile.css'; 
//import { Redirect } from "react-router-dom";
import axios from 'axios'
import {orderDetails} from "./reduxstore/thunk"


function Order(props){
  //let [orderdetails, setOrderdetails] = useState({})
  //let setTotal = props?.orderdetails.reduce((sum, {price})=>sum+price,0)
  let setTotal = props?.orderdetails?.reduce((sum, {price})=>sum+price,0)
  //let totalPerorder = props?.orderdetails?.cakeorders?.reduce((sum, {price})=>sum+price,0)

  
    useEffect(() =>{
        props.dispatch(orderDetails())
        /* var token = localStorage.token
            axios({
              method:'post',
              url:'https://apibyashu.herokuapp.com/api/cakeorders',
              headers:{
                authtoken:token
              }
            }).then((response)=>{
              console.log("response from cakeorders", response)
              //setOrderdetails(response.data)
    
              props.dispatch({
                type:"CAKE_ORDER",
                payload:response.data
            })
            }, (error)=>{
          console.log("error from get user details api", error)
            }) */
          },[])

          
    //console.log("order data",props)
    /* let ConfirmOrder = function(){
        var token = localStorage.token
        let placeOrderUrl ="https://apibyashu.herokuapp.com/api/addcakeorder" 
            axios({
                url : placeOrderUrl,
                method : "Post",
                data : props.placeorder,
                headers:{
                    authtoken:token
                }
            }).then((response)=>{
                if(response.data){
                    props.dispatch({
                        type : "PLACE_ORDER",
                        payload : false
                    })

                    props.dispatch({
                        type:"UPDATE_CART",
                        payload:false
                    })
                    
                }
            },(error)=>{
                console.log("error",error)
            })
        
    } */
    /* props.orderdetails.map((each,index)=>{
        console.log("Order page props",each.orderid,index)
    }) */
    //console.log("Order page props")
    return (

        
            //return(<Cake cake={each} key={index} />)
          
        <div className="container">
    <article className="card">
        <header className="card-header"> My Orders </header>
        {props?.orderdetails?.length>0 && props?.orderdetails.map((each)=>{
        return(
        <div className="card-body">
            <h4>Order ID: {each.orderid}</h4>
            <hr/>
            <ul className="row">
                {each.cakes.map((cakeitem)=>{
                    return(
                    <li className="col-md-4">
                    <figure className="itemside mb-3">
                        <div className="aside"><img src={cakeitem.image} width="200px" className="img-sm border" /></div>
                        <figcaption className="info align-self-center">
                            <p className="title">{cakeitem.name} <br /> Payment : {each.mode}</p> <span className="text-muted">Price {cakeitem.price} </span>
                        </figcaption>
                    </figure>
                </li>
                )
                })}
                
                
            </ul>
            <div className="row">
                <div className="col-sm-6">
                <b> TOTAL ORDERS </b> {each?.length}
                    </div>
                    <div className="col-sm-6">
                    <b> TOTAL PRICE </b> {props?.orderdetails?.cakeorders?.price}
                    </div>
            </div>
            
            {/* <hr /> <a href="#" className="btn btn-warning" data-abc="true"> <i className="fa fa-chevron-left"></i> Back to orders</a> */}
        </div>
        )
        })}
    </article>
    <hr />
    <div className="row">
                {/* <div col-sm-12> */}
                <div className="col-sm-6">
                <b> TOTAL ORDERS </b> {props?.orderdetails?.length}
                    </div>
                    <div className="col-sm-6">
                    <b> TOTAL PRICE </b> {setTotal}
                    </div>
                {/* </div> */}
            </div>


            
</div>
        )
    }


// export default connect ((state ,props){
//     return {
//         orderdadata:state?.orderdata
//     }
// })(Order)


export default connect((state,props)=>{
    console.log(" reducer order details page",state)
    return {
        orderdetails:state?.orderdetails?.cakeorders

    }
})(Order)