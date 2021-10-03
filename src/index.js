import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import './index.css';
import rootReducer from './reducers';

// var logger=({dispatch,getState})=>(next)=>(action)=>{
//   if(typeof action !== 'function'){
//     console.log("ACTION_TYPE=",action.type);
//   }
//   next(action);
// }

const store=createStore(rootReducer,applyMiddleware(logger,thunk))
console.log(store)
console.log('storestate',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


