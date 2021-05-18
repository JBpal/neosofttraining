import {Link} from 'react-router-dom'
//import { useState } from "react"
import { connect } from "react-redux";
//import { Redirect } from "react-router-dom";
import axios from 'axios'

function Payment(props){
    
    console.log("ordered data",props)
    let ConfirmOrder = function(){
        var token = localStorage.token
        let placeOrderUrl =process.env.REACT_APP_BASE_URL + "addcakeorder" 
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

                    props.dispatch({
                        type : "ADD_COUNTER",
                        counter : 4,
                        //payload : false
                      })
                    
                }
            },(error)=>{
                console.log("error",error)
            })
        
    }
    return(
        <div className="cart_section">
     <div className="container-fluid">
         <div className="row">
             
             <div className="col-lg-8 offset-lg-1">
                 <div className="cart_container">
                 <div className="cart_title">Payment page</div>
                   <div className="row">
                    <div className="col-sm-12">
                    <h4>Only cash on delivery available</h4>
                    <Link to={"/checkout/order"}><button type="button" onClick={ConfirmOrder} class="button cart_button_checkout btn btn-primary">NEXT</button></Link>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
    )
}
//export default Payment
export default connect((state,props)=>{
    return {
        placeorder:state?.placeorder

    }
})(Payment)