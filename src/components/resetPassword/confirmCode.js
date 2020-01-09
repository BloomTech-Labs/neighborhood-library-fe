import React, { Component } from 'react'
import './resetPwd.css'

class ConfirmCode extends Component {
    state = {
        code: ''
    }
    handleCodeChange = name => e => {
        this.setState({
            [name]: e.target.value
        })
    }
    codeConfirmForm = e => {
        console.log('j')
    }
    render() {
        return (
            <div className='formHolder'>
                <form className='confirmCodeForm' onSubmit={this.codeConfirmForm}>
                    <input 
                        name='code' type='number' placeholder='Enter your code'
                        onChange={this.handleCodeChange} autoFocus required
                    ></input>
                    <button className='resetBtn'>Reset Password</button>
                </form>                
            </div>
        )
    }
}

export default ConfirmCode