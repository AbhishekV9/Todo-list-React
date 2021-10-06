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
      <div id="ok">
          <div   className="header h-5 fixed-top mb-7">
            <div className="mx-auto m-3" style={ {width: "280px"} }>
              <h1>TODO-LIST</h1>
            </div>
          </div>
          <div id="main" className="b-3 mt-3">
            <div id="form" className="w-40 ">
                <Form />
            </div>
            <div id="todo-container" className="w-50 bl-3 mb-4">
                { list.map((listItem,index)=>(
                  <div className="mt-6">
                        <TodoCard 
                        list={listItem}
                        key={listItem.id}
                        index={index}
                        delete={this.handleDeleteTask}
                        complete={this.handleCompleteTask}
                        />
                  </div>
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
