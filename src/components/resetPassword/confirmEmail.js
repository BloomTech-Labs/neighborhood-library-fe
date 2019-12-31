import React, { Component } from "react"
import "./resetPwd.css"
import nodemailer from "nodemailer"

class ConfirmEmail extends Component {
  state = {
    email: ""
  }
  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    })
  }
  randomCodeGen = () => {
    let a = Math.floor(Math.random() * 1000) + 100
    let b = Math.floor(Math.random() * 1000) + 100
    return `${a}${b}`
  }
  resetFormSubmit = e => {
    let randonNum = this.randomCodeGen()
    nodemailer.createTestAccount((err, account) => {
      const htmlEmail = `
    <h2>Dear Freddy, use this code to verify your password change</h2>
    <h3>${randonNum}</h3> //maybe use random??
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
          <button className="resetBtn">Reset password</button>
        </form>
      </div>
    )
  }
}
/***** To Do *****/
// find out to where we'll be posting once the email has been grabbed
// once the email has been sent, redirect to confirmCode.js
export default ConfirmEmail
