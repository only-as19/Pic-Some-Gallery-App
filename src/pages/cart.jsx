import { useContext } from "react"
import { Context } from "../context/context"
import CartItem from "../components/cartItem"
const Cart = () => {
  const {cartItem} = useContext(Context)

  const cartElement = cartItem.map(item => (
    <CartItem key={item.id} item={item} />
  ))
  console.log(cartItem)
  return (
    <div>
      {cartElement}
    </div>
  )
}

export default Cart
