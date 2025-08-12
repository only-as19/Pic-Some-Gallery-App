import { useContext } from "react"
import { Context } from "../context/context"
import CartItem from "../components/cartItem"
const Cart = () => {
  const {cartItem} = useContext(Context)

  const total = 6.8 * cartItem.length
   const totalPrice = total.toLocaleString("en-US", {style: "currency", currency: "USD"})

  const cartElement = cartItem.map(item => (
    <CartItem key={item.id} item={item} />
  ))
  console.log(cartItem)
  return (
    <div>
      <h1 className="text-3xl font-bold text-center m-4">Cart Items</h1>
      {cartElement}
      <h2 className="text-xl font-semibold text-right m-4">Total Price: {totalPrice}</h2>
    </div>
  )
}

export default Cart
