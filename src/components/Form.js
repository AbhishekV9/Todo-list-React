import React, {Component} from "react";
import { connect } from "react-redux";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { AddTodoApi, Update } from '../actions';

class Form extends Component{

    constructor(){
        super();
        this.state={
            text:'',
            id:'',
            updateText:'',
            idNo:200
        }
    }
    handleAddTask=async ()=>{
        await this.setState({
            idNo:this.state.idNo+1
        })
        const {text,idNo}=this.state;
        const length=idNo;
        await this.props.dispatch(AddTodoApi(text,length));
        this.setState({
            text:'',
        })
        console.log("statt",this.state);
    }

    handleUpdateTask=async ()=>{
        const {id,updateText}= this.state;
        const {dispatch} =this.props;
        await dispatch(Update(parseInt(id),updateText));
        this.setState({
            id:'',
            updateText:''
        })
        console.log(this.state);
    }

    handleChange=(e)=>{
        this.setState({
            text:e.target.value
        })
    }

    handleIdChange=(e)=>{
        this.setState({
            id:e.target.value
        })
    }

    whatUpdate=(e) =>{      
        this.setState({
            updateText:e.target.value
        })
    }

    render(){      
        return(
           <div>
               <p className="h2">Add Task</p>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Enter the task" aria-label="Recipient's username" aria-describedby="button-addon2" value={this.state.text} onChange={this.handleChange} />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleAddTask}>Add Task</button>
                </div>
                <p className="h2">Update Task</p>
                <div className="input-group mb-3">                   
                    <input type="text" className="form-control" placeholder="What to Update" aria-label="Recipient's username" aria-describedby="button-addon2" value={this.state.updateText} onChange={this.whatUpdate} />
                </div>
                <input type="number" className="form-control" placeholder="List Id" aria-label="Recipient's username" aria-describedby="button-addon2" value={this.state.id} onChange={this.handleIdChange} />
                <button className="btn btn-primary" onClick={this.handleUpdateTask}> Update Task</button>
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