import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  Increment = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevObj => ({count: prevObj.count + 10}))
    }
  }

  Decrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevObj => ({count: prevObj.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="Container">
        <h1 className="Heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="Speedometer"
        />
        <h1>Speed is {count}Mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btnContainer">
          <div>
            <button className="btn1" type="submit" onClick={this.Increment}>
              Accelerate
            </button>
          </div>
          <div>
            <button className="brn2" type="submit" onClick={this.Decrement}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
