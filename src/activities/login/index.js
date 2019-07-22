import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'

import LoginForm from './loginform'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  onSubmitForm = e => {
    e.preventDefault()
    const { username, password } = this.state
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('isLogin', '1')
      // eslint-disable-next-line react/prop-types
      this.props.history.push(`${process.env.PUBLIC_URL}/`)
    } else {
      localStorage.setItem('isLogin', '0')
    }
  }
  onInputChange = e => {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }
  render () {
    if (localStorage.getItem('isLogin') === '1') {
      return <Redirect to={{ pathname: `${process.env.PUBLIC_URL}/` }} />
    }
    return (
      <div>
        <LoginForm onInputChange={this.onInputChange} onSubmitForm={this.onSubmitForm} />
      </div>
    )
  }
}

export default withRouter(Login)
