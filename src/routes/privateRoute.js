/* eslint-disable react/prop-types */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (<Route {...rest} render={props => {
    return (
      // eslint-disable-next-line no-undef
      localStorage.getItem('isLogin') === '1' ? (
        <Component {...props} />
      ) : (<Redirect to={{
        pathname: process.env.PUBLIC_URL + '/login'
      }} />
      )
    )
  }} />
  )
}

export default PrivateRoute
