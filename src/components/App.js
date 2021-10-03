import React,{ Component} from 'react';
import {connect } from "react-redux";

import TodoCard from './TodoCard';
import Form from './Form'
import { HandleTodoApi } from '../actions';

class App extends Component{
  
  componentDidMount(){
    console.log('before state',this.props);
    this.props.dispatch(HandleTodoApi());
    console.log('after state',this.props.store);
  }

  render(){
    const {list}= this.props;
    return(
      <div>
          <div>
              <Form />
          </div>
          <div>
              { list.map((listItem)=>(
                  <TodoCard 
                   list={listItem}
                   key={listItem.id}
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
