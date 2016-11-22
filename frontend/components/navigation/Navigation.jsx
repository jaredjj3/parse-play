import React from 'react';
import { Link } from 'react-router';

export default class extends React.Component {

  render () {
    return (
      <div>
        <img src="assets/logo.png" alt="crowded" />
        <ul>
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