import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../actions/index';
import CustomButton from '../customButton/CustomButton';
import './RegisterForm.scss';

class RegisterForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    showPassword: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    this.props.register(newUser, this.state, this.props.history);

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      showPassword: false
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  togglePassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      username,
      password,
      showPassword
    } = this.state;
    return (
      <div className='container'>
        <div className='form-container'>
          <h1 className='sign-up-title'>Sign Up</h1>
          <form className='form-content' onSubmit={this.handleSubmit}>
            <div className='firstName'>
              <label className='reg-label' htmlFor='firstName'>
                First Name
              </label>
              <input
                className='reg-input'
                type='text'
                placeholder='First Name'
                name='firstName'
                value={firstName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='lastName'>
              <label className='reg-label' htmlFor='lastName'>
                Last Name
              </label>
              <input
                className='reg-input'
                type='text'
                placeholder='Last Name'
                name='lastName'
                value={lastName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='email'>
              <label className='reg-label' htmlFor='email'>
                Email
              </label>
              <input
                className='reg-input'
                type='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='user-name'>
              <label className='reg-label' htmlFor='username'>
                Create a Username
              </label>
              <input
                className='reg-input'
                type='text'
                placeholder='Username'
                name='username'
                value={username}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className='password'>
              <label className='reg-label' htmlFor='password'>
                Create a Password
              </label>
              <input
                className='reg-input'
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                name='password'
                value={password}
                onChange={this.handleChange}
                required
              />
              <i
                className={`fa ${
                  showPassword ? 'fa-eye-slash fa-lg' : 'fa-eye fa-lg'
                } password-icon`}
                onClick={this.togglePassword}
              />
            </div>
            <div className='register'>
              <CustomButton type='submit' isRegister>
                Submit
              </CustomButton>
              <span className='login-link'>
                Already have an Account?{' '}
                <Link className='login-link' to='/login'>
                  Log in
                </Link>
              </span>
              <span className='or'> Or Continue with </span>
              <div className='google-button'>
                <CustomButton type='submit' loginWithGoogle>
                  <a href='https://muovivlio.herokuapp.com/auth/google'>
                    Google
                  </a>
                </CustomButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  registerUser: state.registerUser
});

export default connect(mapStateToProps, { register })(RegisterForm);
