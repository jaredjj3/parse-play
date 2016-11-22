import React from 'react';
import { Link } from 'react-router';

export default class extends React.Component {

  render () {
    return (
      <div className="navigation-container">
        <div className="logo-container">
          <img className="logo" src="assets/logo.png" alt="crowded" />
        </div>
        <ul className="navigation-links">
          <li><Link to="home">home</Link></li>
          <li><Link to="upload">upload</Link></li>
          <li><Link to="profile">profile</Link></li>
        </ul>
      </div>
    );
  }

  // event handlers

  onClick () {
    
  }
}