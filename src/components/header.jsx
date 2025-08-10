import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <div>
      <NavLink to="/">Pic Some</NavLink>
      <NavLink to="/cart"><FontAwesomeIcon icon={faCartShopping}/></NavLink>
    </div>
  )
}

export default Header
