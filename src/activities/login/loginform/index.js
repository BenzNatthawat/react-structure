import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ onInputChange, onSubmitForm }) => (
  <form onSubmit={onSubmitForm}>
    <input name='username' type='text' onChange={onInputChange} />
    <input name='password' type='text' onChange={onInputChange} />
    <button type='submit'>submit</button>
  </form>
)

LoginForm.propTypes = {
  onInputChange: PropTypes.func,
  onSubmitForm: PropTypes.func
}

export default LoginForm
