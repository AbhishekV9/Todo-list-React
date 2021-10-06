import { ADD_LISTS,
    ADD_NEW,
    COMPLETE_TASK,
    DELETE_TAKS,
    UPDATE_LIST 
} from '../actions'


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
      case DELETE_TAKS:
          const filteredArray=state.list.filter(list => list.id !== action.id);
          return{
              ...state,
              list:filteredArray
          }
      case COMPLETE_TASK:
          const i=state.list.findIndex( list => list.id === action.id);
          const copyArray=state.list.map(listeItem => ({...listeItem}));
          copyArray[i].completed=true;
          return{
              ...state,
              list:copyArray
          }
      default:
          return  state;
          
  }
}