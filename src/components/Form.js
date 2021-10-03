import React, {Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Form extends Component{
    render(){
        return(
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
        )
    }
}

export default Form;