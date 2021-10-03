export const ADD_LISTS= 'ADD_LISTS';
export const ADD_NEW= 'ADD_NEW';

export function AddList(list){
    return{
        type:ADD_LISTS,
        list
    }
}

export function AddnewData(data){
    return{
        type:ADD_NEW,
        data
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

export function AddTodoApi(text,length){
    const url='https://jsonplaceholder.typicode.com/todos';

    return function(dispatch){

        fetch(url,{
            method:'POST',
            headers: { "Content-Type" : "application/json"},
            body:JSON.stringify({
                userId:1,
                title:text,
                completed:false        
            })

        }).then(response => response.json())
        .then(data => {
            data.id=length+1;
            dispatch(AddnewData(data));
        })
    }
}