import { ADD_LISTS } from '../actions'
export const ADD_NEW= 'ADD_NEW';

const initialState={
    list:[]
}

export default function TodoLists(state= initialState,action){
  switch(action.type){
      case ADD_LISTS:
          return{
              list:action.list
          }
      case ADD_NEW:
          return{
              list:[action.data , ...state.list ]
          }
      default:
          return  state;
          
  }
}