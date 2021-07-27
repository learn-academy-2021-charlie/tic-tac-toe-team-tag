import React, { Component } from 'react'

class Square extends Component{

  handleClick = () => {
    this.props.handleGamePlay(this.props.index)
    this.props.playerTurn()
  }

  render(){
    return(
      <>
        <div id="square" onClick={this.handleClick}>
        {this.props.value}
        </div>
      </>
    )
  }
}
export default Square
