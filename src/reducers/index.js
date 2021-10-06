import { ADD_LISTS,ADD_NEW,UPDATE_LIST } from '../actions'


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
      case UPDATE_LIST:
          const text=action.text;
          const index=state.list.findIndex( list => list.id === action.id);
          const newArray=state.list.map(listeItem => ({...listeItem}));
          newArray[index].title=text;
          return{
              ...state,
              list:newArray
          }
      default:
          return  state;
          
  }
}