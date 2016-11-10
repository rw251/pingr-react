import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top hidden-xs" role="navigation">
          <div className="navbar-inner">
            <div className="container">
              <ul id="mainTab" className="nav nav-tabs nav-tabs-tall nav-wizard pull-left" role="tablist">
                <li role="presentation" style={{width:"20%"}} className="active" data-id="overview">
                  <IndexLink to="/" activeClassName="active">Overview</IndexLink>
                </li>

                <li role="presentation" style={{width:"20%"}} data-id="indicator">
                  <Link to="/indicator" activeClassName="active">Indictor</Link>
                </li>

                <li role="presentation" style={{width:"20%"}} data-id="patient">
                  <Link to="/patient" activeClassName="active">Patient</Link>
                </li>
                <li role="presentation" style={{width:"20%"}} data-id="actions">
                  <Link to="/action" activeClassName="active">Action</Link>
                </li>
              </ul>

              <ul className="nav navbar-nav navbar-right">

                <li>
                  <Link to="/help" activeClassName="active">Help</Link>
                </li>

                <li>
                  <Link to="/contact" activeClassName="active">Contact</Link>
                </li>

                <li>
                  <button id="suggs" className="btn btn-warning" style={{margin:"7px"}}>Send a comment</button>
                </li>

              </ul>
            </div>
          </div>
        </nav>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
