import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Schedule Tool</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Class Search</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">Edit Class</Link>
          </li>
          <li className="navbar-item">
          <Link to="/" className="nav-link">Create Class</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}