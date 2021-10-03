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
    console.log(list);
    return(
      <div>
          <div>
              <Form />
          </div>
          <div>
              { list.map((listItem,index)=>(
                  < TodoCard />
              ))}
          </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    list:state.list,
    store:state
  }
}

const connectedComponent=connect(mapStateToProps)(App);
export default connectedComponent;
