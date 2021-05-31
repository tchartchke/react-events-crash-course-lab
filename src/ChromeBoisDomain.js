import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    const xPos = event.clientX
    const yPos = event.clientY
    drawChromeBoiAtCoords(xPos, yPos)
  }
  
  handleMouseClick = (event) => {
    toggleCycling()
  }
   
  handleKeyPress = (event) => {
    switch (event.key) {
      case 'a':
        resize('+')
        break;
      case 's':
        resize('-')
        break;
      default:
        return;
    }
  }

  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.handleMouseClick}
        onClick={this.handleMouseClick}
        onKeyPress = {this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
