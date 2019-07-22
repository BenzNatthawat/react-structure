import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class MainTemplate extends Component {
  render () {
    if (localStorage.getItem('isLogin') !== '1') {
      return <Redirect to={{ pathname: `${process.env.PUBLIC_URL}/login` }} />
    }
    return (
      <div>MainTemplate</div>
    )
  }
}

export default MainTemplate
