import React, { Component } from 'react'
import './resetPwd.css'
// import nodemailer from 'nodemailer'

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
              <input 
                name="email" type="email" placeholder="Enter your email" 
                onChange={this.handleEmailChange} autoFocus required
              ></input>
              <button className="resetBtn">Reset password</button>
            </form>
          </div>
        );
    }
}
/***** To Do *****/
// find out to where we'll be posting once the email has been grabbed
// make ethereal account to use for testing
// once the email has been sent, redirect to confirmCode.js
export default ConfirmEmail

// nodemailer.createTestAccount((err, account) => {
//   const htmlEmail = `
//     <h2>Dear {name goes here}, use this code to verify your password change</h2>
//     <h3>{6 digit code will go here}</h3> //maybe use random??
//     <span>If you didn't request this, click here</span>
//   `

//   let transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587, // ports vary
//     auth: {
//       username: 'username',
//       password: 'password' // maybe pull in something from the env
//     }
//   })

//   let mailOptions = {
//     from: 'no@thanks.com',
//     to: '{test email will go here til we get out of testing} || this.state.email',
//     replyTo: 'same as from email',
//     subject: 'Forgotten Password',
//     html: htmlEmail
//   }
//   transporter.sendMail(mailOptions, (err, info) => {
//     if(err) return console.log(err)
//     else console.log(info)
//   })
// })