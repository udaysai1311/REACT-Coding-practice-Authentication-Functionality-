import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  onSubmitSuccess = token => {
    const {history} = this.props
    Cookies.set('jwt_token', token, {expires: 7})
    history.replace('/')
  }

  onSubmit = async event => {
    event.preventDefault()
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    this.onSubmitSuccess(data.jwt_token)
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <form className="login-container" onSubmit={this.onSubmit}>
        <h1>Please Login</h1>
        <button type="submit">Login with Sample Creds</button>
      </form>
    )
  }
}
export default Login
