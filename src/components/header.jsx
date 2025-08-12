import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Context } from "../context/context";
import { useContext } from "react";
const Header = () => {
  const {cartItem}=useContext(Context)
  return (
    <div>
      <header className="p-6 bg-gray-500 text-white flex justify-between">
        <NavLink className=" text-3xl font-bold hover:text-black transition-all duration-100 ease-in" to="/" >Pic Some</NavLink>
        <NavLink className={ `${cartItem.length > 0 && "text-blue-500"} text-3xl font-bold hover:text-black transition-all duration-100 ease-in `} to="/cart"><FontAwesomeIcon icon={faCartShopping}/></NavLink>
      </header>
    </div>
  )
}

export default Header
