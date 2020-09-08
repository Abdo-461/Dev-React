import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

//embedding expressions in jsx
//const name = 'Abdo';
//const element = <h1>Hello, {name}</h1>

//method to format username appearence, takes element user as a parameter
// function formatName(user){
//   return user.fname + ' '+user.lname;
// }
// // //create an element user, props
// const user = {
//   fname : 'abdo',
//   lname : 'ommack'
// };
// //create an element to display user
// const element = <h1>hello,{formatName(user)}</h1>

//use jsx as an expression
//define a component, like javascript functions
//takes props as parameters
// function getGreeting(user){
//   if(user){
//     return <h1>hello and welcome , {formatName(user)}</h1>
//   }
//   else{
//     return <h1>tezak 7amra</h1>
//   }
// }

//element to display greeting
//const element = getGreeting(user);
//const time = <h3>{new Date().toLocaleDateString()}</h3>;

// function tick(){
//   const element1 =(
//     <div>
//         <h1>Hello world</h1>
//         <h3>{new Date().toLocaleTimeString()}</h3>
//     </div>
//   );
//   ReactDOM.render(
//    element1, document.getElementById('root') 
//   );
// }
// setInterval(tick,1000);

// //create reach component/class
// //takes in props/obj argument
// class Welcome extends React.Component{
//   render(){
//     return <h1>Hello bitch! {this.props.name}</h1>
//   }
// }

// //const element = <Welcome name = "ommack7elwa"></Welcome>
// //class App that render welcome class several times
// class App extends React.Component{
//   render(){
//     return <div>
//       <Welcome name="tezak"></Welcome>
//       <Welcome name="7amra"></Welcome>
//       <Welcome name="awi"></Welcome>
//     </div>
//   }
// }

//class clock that defines how a clock looks like
class Clock extends React.Component{
  //constructor to build intial state of a clock
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  //life cycle methods
  //start of teh component life cycle
  componentDidMount(){
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
  }
  //end of the component life cycle
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  //set clock state every second
  tick(){
    this.setState({
      date : new Date()
    });
  }
  //render the clock
  render(){
    return( 
        <div>
          <h1>Hello bitch!!!</h1>
          <h2> Time is :{this.state.date.toLocaleTimeString()}</h2>
        </div>
    );
  }
}

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  //<App></App>,
  <Clock></Clock>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
