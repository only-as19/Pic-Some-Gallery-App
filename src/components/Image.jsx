import { useContext, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import { Context } from "../context/context"
import PropTypes from "prop-types"

const Image = ({img,imageClass}) => {
    const[isHovered,setIsHovered] = useState(false)
    const {toggleFavorite,addToCart,cartItem,removeFromCart} = useContext(Context)
    const IsAdded = cartItem.some(item=> item.id === img.id)
    console.log(IsAdded)
    
    const hovered = () =>{
      if(img.isFavorite){
       return <FontAwesomeIcon icon={faHeart} 
          className=" absolute z-10 left-3 top-3 text-[30px] text-red-500" onClick={()=> toggleFavorite(img.id)}
        />
      }else if(isHovered){
       return <FontAwesomeIcon icon={faHeart} 
        className=" absolute z-10 left-3 top-3 text-[30px]" onClick={()=>       toggleFavorite(img.id)}
        />
      }
    } 

    const shoppingIcon = ()=>{
      if(IsAdded){
        return <FontAwesomeIcon icon={faShoppingCart} 
          className=" absolute z-10 right-3 top-3 text-[30px] text-blue-600" onClick={()=>removeFromCart(img.id)}
        />
      }else if(isHovered){
        return <FontAwesomeIcon icon={faPlus} 
          className=" absolute z-10 right-3 top-3 text-[30px]" 
          onClick={()=>addToCart(img)}/>
      }
    }

    isHovered && <FontAwesomeIcon icon={faShoppingCart} 
    className=" absolute z-10 right-3 top-3 text-[30px]" onClick={()=>addToCart(img)}/>

  return (
    <div className={`relative ${imageClass} rounded-lg` }
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}
    >
        <img src={img.url}
        className='block w-full h-full object-cover '
        loading="lazy"  />
        {hovered()}
        {shoppingIcon()}
    </div>
  )
}
Image.prototype = {
  imageClass: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
}

export default Image
