import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const propTypes = {
  isLoggedIn: PropTypes.bool
}

const defaultProps = {
  isLoggedIn: false
}

const NavBar = ({ isLoggedIn }) => {
  return (
  <div>
    <LoggedIn isLoggedIn={isLoggedIn}/>
    <LoggedOut isLoggedIn={isLoggedIn}/>
  </div>
  );
};

const LoggedIn = (isLoggedIn) => {
  if(isLoggedIn) {
    return (
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="about"><li>About</li></Link>
        <Link to="logout"><li>Logout</li></Link>
      </ul>
    )
  }
  return null;  
}
const LoggedOut = (isLoggedIn) => {
  if(!isLoggedIn) {
    return (
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="about"><li>About</li></Link>
        <Link to="login"><li>Login</li></Link>
      </ul>
    )
  }
  return null;  
}

NavBar.propTypes = propTypes

NavBar.defaultProps = defaultProps

export default NavBar
