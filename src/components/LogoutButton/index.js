import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const LogoutButton = props => {
  const logoutClicked = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <button type="button" onClick={logoutClicked} className="button">
        Logout
      </button>
    </>
  )
}
export default withRouter(LogoutButton)
