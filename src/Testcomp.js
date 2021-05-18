

function Abc(){ 
    return(
        <div>
            <h3 className="text-center">Test</h3>
            <div style={{"width":"50%", "margin":"auto"}}>
                <form id="loginform">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email"></input>
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" name="name"></input>   
                    </div>
                    
                    </form>
                    
                    
                    <button className="btn btn-primary">Submit</button>
                </div>
            
        </div>
    )
}
export default Testcomp;
//above line added props to login component known as dispatch