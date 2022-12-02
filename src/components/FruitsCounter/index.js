// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {Mangos: 0, Bananas: 0}

  render() {
    return (
      <div className="bg">
        <div className="container">
          <h1>Bob ate Mangos Bananas</h1>
          <div className="fruit-container">
            <div className="fruit">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button>Eat Mango</button>
            </div>

            <div className="fruit">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button>Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
