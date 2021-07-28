import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      activePlayer: "player1",
      winingPlayer: ""
    }
  }

  calculateWinner=() => {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.state.squares[a] && this.state.squares[a] === this.state.squares[b] && this.state.squares[a] === this.state.squares[c]) {
        this.setState({winingPlayer: this.state.squares[a]})
      }
    }
    return null;
  }

  handleGamePlay = (index) => {
    const {squares, activePlayer,} = this.state
    if (activePlayer === "player1") {
      squares[index] = "😇"
      this.setState({squares: squares, activePlayer: "player2"})
      this.calculateWinner()
    }
    else if (activePlayer === "player2") {
      squares[index] = "👹"
      this.setState({squares: squares, activePlayer: "player1"})
      this.calculateWinner()
    }
  }

  resetGame = () => {
    this.setState({
      squares: ["", "", "", "", "", "", "", "", ""],
      activePlayer: "player1",
      winingPlayer: ""

    })
  }

  render(){
    return(
      <>
      <div id="box">
        <h1>Tic Tac Toe</h1>
    
        <div id="gameboard">
          {this.state.squares.map((value, index) => {
        return (
          <Square
            handleGamePlay = {this.handleGamePlay}
            playerTurn = {this.playerTurn}
            value = {value}
            index = {index}
          />
        )
      })}
    </div>
    {this.state.winingPlayer && <p id="win">Player {this.state.winingPlayer} you are the winner!</p>}
      <button id="resetButton" onClick={this.resetGame}>Reset Game</button>
      </div>
      </>
    )
  }
}
export default App
