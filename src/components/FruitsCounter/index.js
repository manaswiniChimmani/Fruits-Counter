// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onIncrement1 = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  onIncrement2 = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state

    return (
      <div className="container">
        <div className="card">
          <div>
            <h1 className="h1">
              Bob ate <spam className="c1">{count1}</spam> mangoes{' '}
              <spam className="c1">{count2}</spam> bananas
            </h1>
          </div>
          <div className="c2">
            <div className="c3">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="img"
                alt="mango"
              />
              <button
                type="button"
                className="btn1"
                onClick={this.onIncrement1}
              >
                Eat Mango
              </button>
            </div>
            <div className="c3">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="img"
                alt="banana"
              />
              <button
                type="button"
                className="btn2"
                onClick={this.onIncrement2}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
