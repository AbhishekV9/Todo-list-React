import React,{ Component} from 'react';
import {connect } from "react-redux";

import TodoCard from './TodoCard';
import Form from './Form'
import { HandleTodoApi , HandleDelete, CompleteTask } from '../actions';

class App extends Component{
  
  componentDidMount(){
    this.props.dispatch(HandleTodoApi());
  }

  handleDeleteTask= (id)=> {
    this.props.dispatch(HandleDelete(id))
  }

  handleCompleteTask= (id) => {
    this.props.dispatch(CompleteTask(id))
  }

  render(){
    const {list}= this.props;
    return(
      <div>
          <div className="header">
            <div className="mx-auto m-3 p-3" style={ {width: "280px"} }>
              <h1>TODO-LIST</h1>
            </div>
          </div>
          <div id="main" className="b-3">
            <div id="form" className="w-40 ">
                <Form />
            </div>
            <div id="todo-container" className="w-50 bl-3">
                { list.map((listItem,index)=>(
                    <TodoCard 
                    list={listItem}
                    key={listItem.id}
                    index={index}
                    delete={this.handleDeleteTask}
                    complete={this.handleCompleteTask}
                    />
                ))}
            </div>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    list:state.list,
  }
}

const connectedComponent=connect(mapStateToProps)(App);
export default connectedComponent;
