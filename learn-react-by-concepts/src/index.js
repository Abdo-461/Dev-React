import React, { createContext } from 'react';
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

//test prevent default
// function activateLasers(){
//   function handleClick(e){
//     e.preventDefault();
//     console.log('clicked');
//   }

//   return(
//     <a href="#" onClick={handleClick}>
//       click me
//     </a>
//   )
// }

//class clock that defines how a clock looks like
// class Clock extends React.Component{
//   //constructor to build intial state of a clock
//   constructor(props){
//     super(props);
//     this.state = {date: new Date()};
//   }
//   //life cycle methods
//   //start of teh component life cycle
//   componentDidMount(){
//       this.timerID = setInterval(
//         () => this.tick(),
//         1000
//       );
//   }
//   //end of the component life cycle
//   componentWillUnmount(){
//     clearInterval(this.timerID);
//   }
//   //set clock state every second
//   tick(){
//     this.setState({
//       date : new Date()
//     });
//   }
//   //render the clock
//   render(){
//     return( 
//         <div>
//           <h1>Hello bitch!!!</h1>
//           <h2> Time is :{this.state.date.toLocaleTimeString()}</h2>
//           <button onClick={activateLasers}>activatelasers</button>
//         </div>
//     );
//   }
// }

//create a button to toggle on and off
// class Toggle extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {isToggleOn: true};

//     //make 'this' work in teh call back
//     this.handleClick = this.handleClick.bind(this);
//   }
//   //button handeler
//   handleClick(){
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }
//   //render on the page
//   render(){
//     return(
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'On': 'Off'}
//       </button>
//     )
//   }
// }


//conditional rendering

//display if user is logged in
// function UserGreeting(props){
//   return <h1>Welcoime back bitch</h1>
// }
// //display if user is Not logged in
// function GuestGreeting(props){
//   return <h1>You need to sign in</h1>
// }
// //login button
// function UserLogIn(props){
//   return <button>Log In</button>
// }
// //logout button
// function UserLogOut(props){
//   return <button>LogOut</button>
// }

// //class to handle what appears on the screen during different states
// class LogInControl extends React.Component{
//   constructor(props){
//     super(props);
//     this.handleLogIn = this.handleLogIn.bind(this);
//     this.handleLogOut = this.handleLogOut.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLogIn(){
//     this.handleLogIn({isLoggedIn: true})
//   }
//   handleLogOut(){
//     this.handleLogOut({isLoggedIn: false});
//   }

//   render(){
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if(isLoggedIn){
//        button = <UserLogOut></UserLogOut>
//     }
//     else{
//        button = <UserLogIn></UserLogIn>
//     }

//     return(
//       <div>
//         <Greeting isLoggedIn={isLoggedIn}></Greeting>
//         {button}
//       </div>
//     );
//   }
// }

// // //display appropriate greeting
// function Greeting(props){
//   const isLoggedIn = props.isLoggedIn;
//   if(isLoggedIn){
//     return <UserGreeting></UserGreeting>
//   }
//   else{
//     return <GuestGreeting></GuestGreeting>
//   }
// }

//conditional rendering with && / ? operator
// function MailBox(props){
//   const message = props.message;
//   return(
//     <div>
//       <h1>hello</h1>
//         {message.length > 0 ? 
//         <h2>you have {message.length} unread message</h2> : <h2>No messages</h2>}

//         <h1>hello</h1>
//         {message.length > 0 && 
//         <h2>you have {message.length} unread message</h2>}
//     </div>
//     //--------------------//
    
//   );
// }
// const messages = [];
// class Test extends React.Component{

//   state = {
//     test: true,
//   }

//   handleClick = () =>{
//     this.setState({
//       test : !this.state.test
//     })
//   }

//   render(){
//     return(
//       <div>
//         <button onClick ={this.handleClick}>click here</button>
//         {this.state.test ? <p>state is true</p> : <p>State is false</p>}
//       </div>
//     )
//   }
// }

//preventing component from rendering
function WarningBanner(props){
  if(!props.warn){
    return <h2> ur places! ^^^^</h2>;
  }

  return(
    <div className="warning">ur list is empty! create ya ga7ba!</div>
  );
}

class Page extends React.Component{
  constructor(props){
    super(props);
    this.state = {showWarning : false};
    //this.handleToggle = this.handleToggle.bind(this);
  }

  // handleToggle(){
  //   this.setState(state =>({
  //     showWarning : !this.state.showWarning
  //   }));
  // }
  render(){
    return(
      <div>
        <WarningBanner warn={this.state.showWarning}></WarningBanner>
        {/* <button onClick={this.handleToggle}>
          {this.state.showWarning ? 'Hide': 'Show'}
        </button> */}
      </div>
    )
  }
}

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  //<App></App>,
  //<Clock></Clock>,
  //<Toggle></Toggle>,
  //<Greeting isLoggedIn={true}></Greeting>,
  //<LogInControl></LogInControl>,
  //<MailBox message ={messages}></MailBox>,
  //<Test></Test>,
  <Page></Page>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
