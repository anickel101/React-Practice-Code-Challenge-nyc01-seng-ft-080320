import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    sushis: [],
    currentSushis: [],
    eatenSushis: [],
    budget: 100
  }

  componentDidMount(){
    fetch(API)
    .then(response => response.json())
    .then(sushiData => {
      this.setState(prevState => {
        return {
          sushis: [...prevState.sushis, ...sushiData],
          currentSushis: [...sushiData.slice(0,4)]
        }
      })
    })
  }

  eatSushi = (eaten) => {
    if ((eaten.price + this.state.eatenSushis.reduce((a,b) => a + b.price, 0)) <= this.state.budget) {
      let updatedEaten = [...this.state.eatenSushis]
      updatedEaten.push(eaten)
      this.setState({eatenSushis: updatedEaten})
    }
  }

  reloadSushis = () => {
    // Grabbed this from online. Seems reasonable for the purposes of this practice. This will bug if you are served a plate you've already eaten...
    let shuffled = this.state.sushis.sort(() => 0.5 - Math.random())
    let selected = shuffled.slice(0,4)
    this.setState({currentSushis: selected})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer currentSushis={this.state.currentSushis} eatenSushis={this.state.eatenSushis} reloadSushis={this.reloadSushis} eatSushi={this.eatSushi}/>
        <Table eatenSushis={this.state.eatenSushis} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;