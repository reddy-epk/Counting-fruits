import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onMango = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="Background container">
        <div className="inner container">
          <h1>
            Bob ate <span className="banana">{count1}</span> mangoes
            <span className="banana"> {count2} </span>
            bananas
          </h1>
          <div className="fruits container">
            <div className="fruit container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="logo"
              />
              <div className="button-container">
                <button type="button" className="button" onClick={this.onMango}>
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruit container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="logo"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
