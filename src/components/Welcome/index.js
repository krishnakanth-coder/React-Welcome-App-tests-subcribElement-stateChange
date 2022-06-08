import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false, buttonText: `Subscribe`}

  isSubscribe = () => {
    const {isSubscribe, buttonText} = this.state
    if (isSubscribe === false) {
      this.setState(() => ({isSubscribe: true}))
      this.setState(() => ({buttonText: `Subscribed`}))
    } else {
      this.setState(() => ({isSubscribe: false}))
      this.setState(() => ({buttonText: `Subscribe`}))
    }
  }

  render() {
    const {buttonText} = this.state
    return (
      <div className="container">
        <h1 className="header">Welcome</h1>
        <p className="para-text">Thanks you! Happy Learning</p>
        <button type="button" className="button" onClick={this.isSubscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
