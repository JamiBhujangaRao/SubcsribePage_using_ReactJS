import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const text = this.getText()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="about"> Thank you! Happy Larning</p>
        <button className="btn" onClick={this.onSubscribe}>
          {text}
        </button>
      </div>
    )
  }
}
export default Welcome
