import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { fetchUser } from './actions';
import './App.scss';
import HomeDashboard from './components/homeDashboard/HomeDashboard';
import { LandingPage } from './components/landingPage/LandingPage';
import Login from './components/login/Login.js'
import RegisterForm from './components/registration/RegisterForm';
import Books from "./books/Books.js";
import BookForm from './components/borrowerDashboard/BookForm';

function App(props) {
  function renderContent() {
  if (props.loggedIn) {
    return (
      <li><a href="https://muovivlio.herokuapp.com/auth/logout">Logout</a></li>
      ) }else {
            return (
                <li><a href="/login">Login </a></li>
            )
            
            }}

  return (
    <div className='App'>
      <header>
        <div className='logo'>logo</div>
        <nav className='app-nav'>
          <Link to='/about'>About</Link>
          <Link to='/shelf'>Shelf</Link>
          {/* <Link className='login-btn' to='/login'>
          {props.loggedIn ? 'Logout': "Login"}
          </Link> */}
          <Link to='/books'>Books</Link>
          <Link className='login-btn' to='/login'>
          {renderContent()}
          </Link>
          
        </nav>
      </header>
      <h2> Share the Experience of Your Books With Others</h2>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/homepage' component={HomeDashboard} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={RegisterForm} />
        <Route path='/borrow' component={BookForm} />
        <Route path='/books' component={Books} />
      </Switch>
    </div>
  );
}
const mapStateToProps = (state ) => {
  return {loggedIn: state.loginAuthReducer.loggedIn}
}

export default connect(mapStateToProps, { fetchUser })(App);
