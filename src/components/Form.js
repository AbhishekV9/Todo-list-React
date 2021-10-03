import react, {Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Form extends Component{
    render(){
        return(
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
        )
    }
}

export default Form;