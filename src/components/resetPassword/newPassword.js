import React, { Component } from 'react'
import './resetPwd.css'

class NewPassword extends Component {
    state = {
        newPassword: '',
        confirmNewPassword: ''
    }
    handlePwdChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(`${e.target.name}: ${e.target.value}`)
    }
    confirmNewPassword = e => {
        console.log('j')
    }
    render() {
        return (
            <div className='formHolder'>
                <form className='confirmCodeForm' onSubmit={this.confirmNewPassword}>
                    <input 
                        name='newPassword' type='password' placeholder='Enter new password'
                        onChange={this.handlePwdChange} autoFocus required
                    ></input>
                    <input 
                        name='confirmNewPassword' type='password' placeholder='Confirm new password'
                        onChange={this.handlePwdChange} required
                    ></input>
                    <button className='resetBtn'>Reset Password</button>
                </form>                
            </div>
        )
    }
}

export default NewPassword