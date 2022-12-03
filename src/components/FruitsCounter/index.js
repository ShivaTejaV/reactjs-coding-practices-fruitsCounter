// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {Mangos: 0, Bananas: 0}

  eatMango = () => {
    this.setState(prevState => ({Mangos: prevState.Mangos + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({Bananas: prevState.Bananas + 1}))
  }

  render() {
    const {Mangos, Bananas} = this.state

    return (
      <div className="bg">
        <div className="container">
          <h1>
            Bob ate <span className="number">{Mangos}</span> mangoes{' '}
            <span className="number">{Bananas}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="fruit">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="button" type="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>

            <div className="fruit">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button className="button" type="button" onClick={this.eatBanana}>
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
