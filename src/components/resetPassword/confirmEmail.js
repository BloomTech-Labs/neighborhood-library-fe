import React, { Component } from 'react'


class ConfirmEmail extends Component {
    
    render() {
        return (
          <div className="formHolder">
            <form className="resetPasswordForm">
                <input name="email" type="email" placeholder="Enter your email"></input>
                <button className="resetBtn">Reset password</button>
            </form>
          </div>
        );
    }
}

export default ConfirmEmail