import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState({count: count + 10})
    }
  }

  onBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState({count: count - 10})
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <p className="paragraph">Speed is {count}mph</p>
        <p className="limit">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button type="button" className="acc-btn" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button type="button" className="break-btn" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
