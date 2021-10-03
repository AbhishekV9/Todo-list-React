import React  from "react";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function TodoCard(props){
    const {list}=props;

    return(
        <div className="card" style={{width: "20rem"} } >
        <div className="card-header ">
        <h5 className="card-title">Task No:- {list.id} </h5>
        </div>    
        <div className="card-body">
        <p className="card-text">Task:- { list.title} </p>
          <p className="card-text">Completed:- { String(list.completed)} </p>
           <button>Hiiii</button>
        </div>
      </div>
    )
}

export default TodoCard;