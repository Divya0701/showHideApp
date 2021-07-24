import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {displayFirstName: 'hide', displayLastName: 'hide'}

  changeMode1 = () => {
    const {displayFirstName} = this.state
    if (displayFirstName === 'show') {
      this.setState({displayFirstName: 'hide'})
    } else {
      this.setState({displayFirstName: 'show'})
    }
  }

  changeMode2 = () => {
    const {displayLastName} = this.state
    if (displayLastName === 'show') {
      this.setState({displayLastName: 'hide'})
    } else {
      this.setState({displayLastName: 'show'})
    }
  }

  firstName = () => {
    const {displayFirstName} = this.state
    if (displayFirstName === 'show') {
      return <p className="div-container">Joe</p>
    }
    return null
  }

  lastName = () => {
    const {displayLastName} = this.state
    if (displayLastName === 'show') {
      return <p className="div-container">Jonas</p>
    }
    return null
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="sub-container">
          <div className="item">
            <button onClick={this.changeMode1} type="button" className="button">
              Show/Hide Firstname
            </button>
            {this.firstName()}
          </div>
          <div className="item">
            <button onClick={this.changeMode2} type="button" className="button">
              Show/Hide Lastname
            </button>
            {this.lastName()}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
