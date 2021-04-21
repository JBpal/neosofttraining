import { Link } from "react-router-dom";

function Cake(props){
    return (
        <>
            <div className="card" style={{"width": "20.4rem"}}>
            <Link to={'/cake/'+props.cake.cakeid}><img src={props.cake.image} style={{"height": "200px"}} className="card-img-top" alt="..."/></Link>
            <div className="card-body">
            <h5 className="card-title">{props.cake.name}</h5>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            <Link to={'/cake/'+props.cake.cakeid}><button className="btn btn-primary">View</button></Link>
            </div>
        </div>
        </>
    );
}

export default Cake