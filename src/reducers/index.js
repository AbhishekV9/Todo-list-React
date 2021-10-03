import { ADD_LISTS } from '../actions'

const initialState={
    list:[]
}

export default function TodoLists(state= initialState,action){
  switch(action.type){
      case ADD_LISTS:
          return{
              ...state,
              list:action.list
          }
      default:
          return  state;
          
  }
}