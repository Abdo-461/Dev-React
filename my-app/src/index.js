import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//function component to create squares
class Square extends React.Component {
    render() {
      return (
        <button className="square" onClick={this.props.onClick}>
                {this.props.value} 
        </button>
      );
    }
  }
  //component to create the board
  class Board extends React.Component {
    //baord's intial state to contain an array of 9 nulls correspoding to 9 squares
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            //boolean to determin which player should go next
            xIsNext: true,
        };
    }
    //handle click definition
    handleClick(i){
      //slice board
      const squares = this.state.squares.slice();
      //check if user already clicked square
      if(squares[i]) return;
      //assign X on square
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      //store state of squares
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
        });
    }

    //render contents inside the squares
    renderSquare(i) {
      return <Square 
            //assign intial state of squares
            value={this.state.squares[i]} 
            //handle clicks on square
            onClick={() => this.handleClick(i)}
      />;
    }
    //draws baord
    render() {
      //call calculate winner in board component
      const winner = calculateWinner(this.state.squares);
      //determine a winner or next player
      let status;
      if(winner){
        status = 'Winner:' +winner;
        
      }
      else{
        status = 'Next Player:' +(this.state.xIsNext ? 'X' : 'O');
      }
      //return the board
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  //create the skeleton for the game
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  //render the game under the id root
  ReactDOM.render(
     <Game />,
    document.getElementById('root')
  );
  
//calculate winner
function calculateWinner(squares){
  //values of lines
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let i=0; i<lines.length; i++ ){
      const[a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
  }
  return null;
}