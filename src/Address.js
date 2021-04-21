import {useState} from 'react'
import { Link } from "react-router-dom";
/* import {faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios' */

function Address(){
  var [formerrors, setFormerrors] = useState({})
  var validate = function(elements){
    var errors={}
    console.log("elements recieved for validation", elements, elements.name)
    if(!elements.name.value){
      errors.name="Name is required"
    }
    if(elements.name.value && !elements.name.value.match(/^[a-zA-Z]+$/)){
      errors.name="Only letters required"
    }

    if(!elements.phone.value){
      errors.phone="Phone is required"
    }
    if(elements.phone.value && !isNaN(elements.phone.value) && (elements.phone.value.length>10 || elements.phone.value.length<10)){
      errors.phone="Enter valid phone number"
    }

    if(!elements.address.value){
      errors.address="Address is required"
    }
    if(!elements.city.value){
      errors.city="City is required"
    }
    if(!elements.pincode.value){
      errors.pincode="Pincode is required"
    }
    if(elements.pincode.value && elements.pincode.value.match(/^[a-zA-Z]+$/)){
      errors.pincode="Wrong pincode entered"
    }
    
    var errorkeys=Object.keys(errors)
    if(errorkeys.length>0)
    return errors
    else 
    return false
  }
  var placeOrder = function(){
    var form = document.getElementById('addressform')
    console.log("Form element is this", form.elements, form.controls)
    var errors = validate(form.elements)
    if(errors){
      setFormerrors(errors)
    }
    else{
      setFormerrors({})
      alert("Form Validated successfully")
    }
  }

    return(
    <div class="cart_section">
     <div class="container-fluid">
         <div class="row">
             
             <div class="col-lg-8 offset-lg-1">
                 <div class="cart_container">
                 <div class="cart_title">Shipping Details</div>
                   <div class="row">
                    <div class="col-sm-12">

<form id="addressform">
  <div class="form-group">
    <label for="forName">Name</label>
    <input type="text" className="form-control" name="name" id="exampleFormControlInput1" placeholder="Enter Name" />
    <div className="form-error" style={{color: "red"}}>{formerrors?.name && <div>{formerrors.name}</div>}</div>
  </div>
  <div class="form-group">
    <label for="forName">Phone</label>
    <input type="text" class="form-control" name="phone" id="exampleFormControlInput1" placeholder="Enter Phone" />
    <div className="form-error" style={{color: "red"}}>{formerrors?.phone && <div>{formerrors.phone}</div>}</div>
  </div>
  <div class="form-group">
    <label for="forName">Address</label>
    <input type="text" class="form-control" name="address" id="exampleFormControlInput1" placeholder="Enter Address" />
    <div className="form-error" style={{color: "red"}}>{formerrors?.address && <div>{formerrors.address}</div>}</div>
  </div>

  <div class="row">

  <div class="col-6">
  <div class="form-group">
    <label for="forName">City</label>
    <input type="text" class="form-control" name="city" id="exampleFormControlInput1" placeholder="Enter City" />
    <div className="form-error" style={{color: "red"}}>{formerrors?.city && <div>{formerrors.city}</div>}</div>
  </div>
  </div>

  <div class="col-6">
  <div class="form-group">
    <label for="forName">Pincode</label>
    <input type="text" class="form-control" name="pincode" id="exampleFormControlInput1" placeholder="Enter Pincode" />
    <div className="form-error" style={{color: "red"}}>{formerrors?.pincode && <div>{formerrors.pincode}</div>}</div>
  </div>
  </div>

  </div>
</form>
<button onClick={placeOrder}>Place Order</button>

</div>

                       <div class="col-sm-5">
                       
                         
                       </div>

                     </div>


                     {/* <div class="row">
                        <div className="col-sm-10"></div>
                        <div className="col-sm-2">
                        <Link to="/checkout"><button type="button" class="button cart_button_checkout">Checkout</button></Link>
                        </div>
                    </div> */}
                     
                 </div>
             </div>



         </div>
     </div>
 </div>
    )
}
export default Address