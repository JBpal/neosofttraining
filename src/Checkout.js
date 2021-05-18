import { Route, useRouteMatch } from "react-router";
import {Link} from 'react-router-dom'
import Order from './Order'
import Address from './Address'
import CartSummary from './CartSummary'
import Payment from './Payment'
import { connect } from 'react-redux';

function Checkout(props){

    if(!props?.loginstatus){
        props.history.push("/login")
    }

    var route = useRouteMatch()
    var url = route.url
    console.log("this is url ",url)
    var path = route.path
    console.log("how to get route", route)
    return <div className="row">
        <div className="col-4">
        <Link to={url}><li>Cart Summary</li></Link>
        {props?.updatecounter>=2 ?<Link to={url+"/address"}><li >Address</li></Link>:<li >Address</li>}
        {/* <Link to={url+"/address"}><li>Add Address</li></Link> */}
        {props?.updatecounter>=3 ?<Link to={url+"/payment"}><li>Payment</li></Link>:<li >Payment</li>}
        {/* <Link to={url+"/payment"}><li>Payment</li></Link> */}
        {props?.updatecounter>=4 ?  <Link to={url+"/order"}><li>Order</li></Link>:<li >Order</li>}
        {/* <Link to={url+"/order"}><li>Order</li></Link> */}
        </div>

        <div className="col-8">
            <Route exact path={path} component={CartSummary} />
            {props?.updatecounter>=2 && <Route exact path={path+"/address"} component={Address} />}
            {/* <Route exact path={path+"/address"} component={Address} /> */}
            {props?.updatecounter>=3 && <Route exact path={path+"/payment"} component={Payment} /> }
            {/* <Route exact path={path+"/payment"} component={Payment} /> */}
            {props?.updatecounter>=4 && <Route exact path={path+"/order"} component={Order} /> }
            {/* <Route exact path={path+"/order"} component={Order} /> */}
        </div>
    </div>
    
}
//export default Checkout;
export default connect(function(state,props)
{
    return{
        loginstatus: state["isloggedin"],
        updatecounter:state?.updatecounter,
    }
}
)(Checkout)