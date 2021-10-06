import React,{ Component} from 'react';
import {connect } from "react-redux";

import TodoCard from './TodoCard';
import Form from './Form'
import { HandleTodoApi , HandleDelete } from '../actions';

class App extends Component{
  
  componentDidMount(){
    this.props.dispatch(HandleTodoApi());
  }

  handleDeleteTask= (id)=> {
    console.log(id);
    this.props.dispatch(HandleDelete(id))
  }
  render(){
    const {list}= this.props;
    return(
      <div>
          <div>
              <Form />
          </div>
          <div>
              { list.map((listItem,index)=>(
                  <TodoCard 
                   list={listItem}
                   key={listItem.id}
                   index={index}
                   delete={this.handleDeleteTask}
                  />
              ))}
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
