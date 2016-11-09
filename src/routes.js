import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Indicator from './components/Indicator';
import Patient from './components/Patient';
import ActionPage from './components/ActionPage';
import Help from './components/Help';
import Contact from './components/Contact';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="indicator" component={Indicator} />
      <Route path="patient" component={Patient} />
      <Route path="action" component={ActionPage} />
      <Route path="help" component={Help} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
);

export default Routes;
