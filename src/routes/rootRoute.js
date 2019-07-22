import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PrivateRoute from './privateRoute'
import LoginTemplate from '../templates/login'
import MainTemplate from '../templates/main'

class RouteRoot extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={LoginTemplate} />
          <PrivateRoute path={`${process.env.PUBLIC_URL}/`} component={MainTemplate} />
        </Switch>
      </Router>
    )
  }
}

export default RouteRoot
