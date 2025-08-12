import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../context/context'
import { useContext } from 'react'

const CartItem = ({item}) => {
    const {removeFromCart} =useContext(Context)
  return (
    <div className='text-[20px] flex justify-between items-center m-5'>
        <FontAwesomeIcon icon={faTrash} className='hover:text-blue-500' onClick={()=> removeFromCart(item.id)}/>
      <img className='w-[170px] h-30 mr-auto ml-3 rounded shadow-lg object-cover' src={item.url} alt="" />
      <p className='font-bold'>$6.8</p>
    </div>
  )
}

export default CartItem
