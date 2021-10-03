export const ADD_LISTS= 'ADD_LISTS'


export function AddList(list){
    return{
        type:ADD_LISTS,
        list
    }
}

export function HandleTodoApi(){
    
    const url= 'https://jsonplaceholder.typicode.com/todos';
    return function(dispatch){
      
        fetch(url)
        .then(response => response.json())
        .then(list => {
            dispatch(AddList(list))
        });
    }
}