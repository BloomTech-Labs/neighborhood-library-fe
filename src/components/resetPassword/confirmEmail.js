import React, { Component } from 'react'
import './resetPwd.css'

class ConfirmEmail extends Component {
    state = {
      email: ''
    }
    handleEmailChange = e => {
      this.setState({
        email: e.target.value
      })
    }
    resetFormSubmit = e => {
      console.log('j')
    }
    render() {
        return (
          <div className="formHolder">
            <form className="resetPasswordForm" onSubmit={this.resetFormSubmit}>
              <h1>Enter your email to reset your password</h1>
              <input name="email" type="email" placeholder="Enter your email" onChange={this.handleEmailChange} autoFocus></input>
              <button className="resetBtn">Reset password</button>
            </form>
          </div>
        );
    }
}

export default ConfirmEmail