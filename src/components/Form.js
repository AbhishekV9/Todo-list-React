import React, {Component} from "react";
import { connect } from "react-redux";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { AddTodoApi } from '../actions';

class Form extends Component{

    constructor(){
        super();
        this.state={
            text:''
        }
    }
    handleAddTask=()=>{
        const {text}=this.state;
        const length=this.props.list.length;
        console.log(text,length);
        this.props.dispatch(AddTodoApi(text,length));
    }

    handleChange=(e)=>{
        this.setState({
            text:e.target.value
        })
    }

    render(){
        return(
           <div>
               <p className="h2">Add Task</p>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter the task" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={this.handleChange} />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleAddTask}>Add Task</button>
                </div>
                <p className="h2">Update Task</p>
                <div className="input-group mb-3">                   
                    <input type="text" className="form-control" placeholder="List Id" aria-label="Recipient's username" aria-describedby="button-addon2" />
                </div>
                <button className="btn btn-primary"> Update Task</button>
           </div>
        )
    }
}

function mapStateToProps(state){
    return{
        list:state.list
    }
}

const connectedComponent=connect(mapStateToProps)(Form);

export default connectedComponent;