import React from 'react'

class Sushi extends React.Component {

  eatSushi = () => {
    if(!this.props.eaten) {
      this.props.eatSushi(this.props.data)
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={this.eatSushi}>
          { 
            this.props.eaten ?
              null
            :
              <img src={this.props.data.img_url} alt="" width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.data.name} - ${this.props.data.price}
        </h4>
      </div>
    )
  }

}

export default Sushi