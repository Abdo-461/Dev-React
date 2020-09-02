import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

//embedding expressions in jsx
//const name = 'Abdo';
//const element = <h1>Hello, {name}</h1>

//method to format username appearence, takes element user as a parameter
function formatName(user){
  return user.fname + ' '+user.lname;
}
//create an element user
const user = {
  fname : 'abdo',
  lname : 'ommack'
};
//create an element to display user
//const element = <h1>hello,{formatName(user)}</h1>

//use jsx as an expression
function getGreeting(user){
  if(user){
    return <h1>hello and welcome , {formatName(user)}</h1>
  }
  else{
    return <h1>tezak 7amra</h1>
  }
}

//element to display greeting
const element = getGreeting(user);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  element,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
