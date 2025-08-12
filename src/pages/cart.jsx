import { useContext,useState } from "react"
import { Context } from "../context/context"
import CartItem from "../components/cartItem"
const Cart = () => {
  const {cartItem,emptyCart} = useContext(Context)
  const [buttonText,setButtonText] =useState("Place Order")

  const total = 6.8 * cartItem.length
   const totalPrice = total.toLocaleString("en-US", {style: "currency", currency: "USD"})

   const handleOrder = ()=>{
    
      setButtonText("Ordering...")
       setTimeout(()=>{
        setButtonText("Place Order")
        emptyCart()
      },3000)
    }

  const cartElement = cartItem.map(item => (
    <CartItem key={item.id} item={item} />
  ))
  console.log(cartItem)
  return (
    <div>
      <h1 className="text-3xl font-bold text-center m-4">Cart Items</h1>
      {cartElement}
      <h2 className="text-xl font-semibold text-right m-4">Total Price: {totalPrice}</h2>
      <div className="flex justify-center">
        <button className={`border-2 py-3 px-2.5 bg-gray-300 font-semibold ${cartItem.length > 0 ?"block":"hidden"}`} onClick={handleOrder}>{buttonText}</button>
        {cartItem.length === 0 && (<p className="font-bold">No Item in the Cart</p>) }
      </div>
    </div>
  )
}

export default Cart
