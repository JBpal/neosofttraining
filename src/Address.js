import {useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import { useRouteMatch } from "react-router";
import { connect } from 'react-redux';
/* import {faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios' */




function Address(props){

  //var route = useRouteMatch()
  //var url = route.url

  var [formerrors, setFormerrors] = useState({})

  /* var [addressdata, setAddressdata]=useState({})

  let setTotal = props?.cart?.data?.reduce((sum, {price})=>sum+price,0)

  let getName=(event)=>{
    setAddressdata({
          ...addressdata,
          name:event.target.value,
          price: setTotal,
          cakes: props?.cart?.data
      })
  }

  let getPhone=(event)=>{
    setAddressdata({
          ...addressdata,
          phone:event.target.value
      })
  }
  let getAddress=(event)=>{
    setAddressdata({
          ...addressdata,
          address:event.target.value
      })
  }
  let getCity=(event)=>{
    setAddressdata({
          ...addressdata,
          city:event.target.value
      })
  }
  let getPincode=(event)=>{
    setAddressdata({
          ...addressdata,
          pincode:event.target.value
      })
  } */

  var validate = function(elements){
    var errors={}
    var nameval=elements.name.value
    var phoneval=elements.phone.value
    var addressval=elements.address.value
    var cityval=elements.city.value
    var pincodeval=elements.pincode.value

    console.log("elements recieved for validation", elements, elements.name)
    if(!nameval){
      errors.name="Name is required"
    }
    if(nameval && !nameval.match(/^[a-zA-Z]+$/)){
      errors.name="Only letters required"
    }

    if(!phoneval){
      errors.phone="Phone is required"
    }
    if(phoneval && (phoneval.length>10 || phoneval.length<10 || phoneval.match(/^[a-zA-Z]+$/))){
      errors.phone="Enter valid phone number"
    }

    if(!addressval){
      errors.address="Address is required"
    }
    if(!cityval){
      errors.city="City is required"
    }
    if(!pincodeval){
      errors.pincode="Pincode is required"
    }
    if(pincodeval && pincodeval.match(/^[a-zA-Z]+$/)){
      errors.pincode="Wrong pincode entered"
    }
    
    var errorkeys=Object.keys(errors)
    if(errorkeys.length>0)
    return errors
    else 
    return false
  }
  let placeOrder = function(){
    var form = document.getElementById('addressform')
    console.log("Form element is this", form.elements, form.controls)
    var errors = validate(form.elements)
    if(errors){
      setFormerrors(errors)
    }
    else{
      setFormerrors({})
      //alert("Form Validated successfully")
      let setTotal = props?.cart?.data?.reduce((sum, {price})=>sum+price,0)
    var addressdata={
        price: setTotal,
        name: form.elements.name.value,
        address: form.elements.address.value,
        city: form.elements.city.value,
        phone: form.elements.phone.value,
        pincode: form.elements.pincode.value,
        cakes: props?.cart?.data
  }

      console.log("checking address submit error", addressdata);
            /* var token = localStorage.token
            let apiUrl = "https://apibyashu.herokuapp.com/api/addcakeorder"
         axios({
                url:apiUrl,
                method:"post",
                data:addressdata,

                headers:{
                  authtoken:token
                }

            }).then((response)=>{ */

              //props.history.push("/checkout/payment")
              /* props.dispatch({
                type:"UPDATE_CART",
                payload:false
            }) */
            props.dispatch({
              type:"PLACE_ORDER",
              payload:addressdata
          })
          props.dispatch({
            type : "ADD_COUNTER",
            counter : 3,
            //payload : false
          })
          props.history.push("/checkout/payment")
            //console.log("checking url","/checkout/payment")
            
            

                /* console.log("response form addcakeorder api",response.data);
            },(error)=>{
                console.log("Error form addcakeorder api",error)
            })
            console.log("...addcakeorder" ,addressdata) */

    }
  }

    return(
    <div className="cart_section">
     <div className="container-fluid">
         <div className="row">
             
             <div className="col-lg-8 offset-lg-1">
                 <div className="cart_container">
                 <div className="cart_title">Shipping Details</div>
                   <div className="row">
                    <div className="col-sm-12">

<form id="addressform">
  <div className="form-group">
    <label for="forName">Name</label>
    <input type="text" className="form-control" name="name" id="exampleFormControlInput1" placeholder="Enter Name"/*  onChange={getName} */ />
    <div className="form-error" style={{color: "red"}}>{formerrors?.name && <div>{formerrors.name}</div>}</div>
  </div>
  <div className="form-group">
    <label for="forName">Phone</label>
    <input type="text" className="form-control" name="phone" id="exampleFormControlInput1" placeholder="Enter Phone" /* onChange={getPhone} */ />
    <div className="form-error" style={{color: "red"}}>{formerrors?.phone && <div>{formerrors.phone}</div>}</div>
  </div>
  <div className="form-group">
    <label for="forName">Address</label>
    <input type="text" className="form-control" name="address" id="exampleFormControlInput1" placeholder="Enter Address" /* onChange={getAddress} */ />
    <div className="form-error" style={{color: "red"}}>{formerrors?.address && <div>{formerrors.address}</div>}</div>
  </div>

  <div className="row">

  <div className="col-6">
  <div className="form-group">
    <label for="forName">City</label>
    <input type="text" className="form-control" name="city" id="exampleFormControlInput1" placeholder="Enter City" /* onChange={getCity} */ />
    <div className="form-error" style={{color: "red"}}>{formerrors?.city && <div>{formerrors.city}</div>}</div>
  </div>
  </div>

  <div className="col-6">
  <div className="form-group">
    <label for="forName">Pincode</label>
    <input type="text" className="form-control" name="pincode" id="exampleFormControlInput1" placeholder="Enter Pincode" /* onChange={getPincode} */ />
    <div className="form-error" style={{color: "red"}}>{formerrors?.pincode && <div>{formerrors.pincode}</div>}</div>
  </div>
  </div>

  </div>
</form>
<button onClick={placeOrder} type="button" class="button btn btn-primary">Place Order</button>

</div>

                       <div className="col-sm-5">
                       
                         
                       </div>

                     </div>


                     {/* <div className="row">
                        <div className="col-sm-10"></div>
                        <div className="col-sm-2">
                        <Link to="/checkout"><button type="button" className="button cart_button_checkout">Checkout</button></Link>
                        </div>
                    </div> */}
                     
                 </div>
             </div>



         </div>
     </div>
 </div>
    )
}
//export default Address
export default connect(function(state,props)
{
    return{
        cart:state?.cart,
        //orderplaced: state?.placeorder
        //user:state?.user?.email
    }
}
)(Address)