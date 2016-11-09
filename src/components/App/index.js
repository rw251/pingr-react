import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/indicator" activeClassName="active">Indictor</Link></li>
          <li><Link to="/patient" activeClassName="active">Patient</Link></li>
          <li><Link to="/action" activeClassName="active">Action</Link></li>
          <li><Link to="/help" activeClassName="active">Help</Link></li>
          <li><Link to="/contact" activeClassName="active">Contact</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
