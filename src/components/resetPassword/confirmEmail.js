import React, { Component } from "react"
import "./resetPwd.css"
import Axios from "axios"
// import nodemailer from "nodemailer"
// import { Redirect } from "react-router-dom";

class ConfirmEmail extends Component {
  state = {
    email: "",
    redirect: false
  }

  handleEmailChange = name => e => {
    e.preventDefault()
    this.setState({
      [name]: e.target.value
    })
  }

  redirectHandler = e => {
    this.setState({
      redirect: true
    })
  } 

  resetFormSubmit = e => {
    e.preventDefault()
    Axios
      .post('{route link here}/resetPassword', { email: this.state.email })
      .then(res => {
        console.log(res.data)
        if(res.data === 'Email was not found') {
          alert('This email was not found, try again')
          return
        }
        if(res.data === 'Email was found') {
          alert('Check your email for your password reset link')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="formHolder">
        <form className="resetPasswordForm" onSubmit={this.resetFormSubmit}>
          <h1>Enter your email to reset your password</h1>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={this.handleEmailChange}
            autoFocus
            required
          ></input>
          {
            this.state.email !== '' ?
              <button className="resetBtn" onClick={this.redirectHandler}>Reset password</button> :
              <button className="resetBtn" onClick={this.redirectHandler} disabled>Reset password</button>
          }
        </form>
      </div>
    )
  }
}
/***** To Do *****/
// find out to where we'll be posting once the email has been grabbed
// once the email has been sent, redirect to confirmCode.js
/*          [USE THIS CODE IN THE BACK END]
  import crypto from 'crypto'
  import nodemailer from 'nodemailer
  require('dotenv').config()

  module.exports = app => {
    app.post(/resetPassword, (req, res) => {
      if (req.body.email === '') {
        res.status(400).send('email required)
      }
    })
  }
     nodemailer.createTestAccount((err, account) => {
       const htmlEmail = `
        <h2>Dear Freddy, use this code to verify your password change</h2>
        <h3>${randonNum}</h3>
        <span>If you didn't request this, click here</span>
      `

       let transporter = nodemailer.createTransport({
         host: "smtp.ethereal.email",
         port: 587, // ports vary
         auth: {
           username: "nora.satterfield7@ethereal.email",
           password: "kbtj984NFbnUVGsjrf" // maybe pull in something from the env
         }
       })
       let mailOptions = {
         from: "carlo.s16@hotmail.com",
         to: "nora.satterfield7@ethereal.email",
         replyTo: "carlo.s16@hotmail.com",
         subject: "Forgotten Password",
         html: htmlEmail
       }
       transporter.sendMail(mailOptions, (err, info) => {
         if (err) return console.log(err)
         else console.log(info)
       })
     })
 */
export default ConfirmEmail