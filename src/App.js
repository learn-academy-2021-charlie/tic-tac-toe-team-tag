import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      activePlayer: "player1"
    }
  }

  handleGamePlay = (index) => {
    const {squares, activePlayer} = this.state
    if (activePlayer === "player1") {
      squares[index] = "X"}
    else if (activePlayer === "player2") {
      squares[index] = "O"}
    }

  playerTurn = () => {
    if (this.state.activePlayer === "player1") {
      this.setState({activePlayer: "player2"})
    }
    else if (this.state.activePlayer === "player2") {
        this.setState({activePlayer: "player1"})
    }
  }

  render(){
    return(
      <>
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
    <p>{this.state.activePlayer}</p>
      </>
    )
  }
}
export default App
