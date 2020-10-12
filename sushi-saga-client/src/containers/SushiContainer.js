import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  renderSushis = () => {
    console.log("Current Sushis: ", this.props.currentSushis)
    console.log("Eaten Sushis: ", this.props.eatenSushis)
    return this.props.currentSushis.map(sushi => {
      if (this.props.eatenSushis.find(el => el.id === sushi.id)) {
        return <Sushi key={sushi.id} data={sushi} eaten={true} eatSushi={this.props.eatSushi}/>
      } else {
        return <Sushi key={sushi.id} data={sushi} eaten={false} eatSushi={this.props.eatSushi}/>
      }
      })
  }

  render() {
    return (
      <React.Fragment>
        <div className="belt">
          {this.renderSushis()}
          <MoreButton reloadSushis={this.props.reloadSushis}/>
        </div>
      </React.Fragment>
    )
  }
}

export default SushiContainer