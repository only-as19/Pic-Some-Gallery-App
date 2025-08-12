import { useContext, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Context } from "../context/context"

const Image = ({img,imageClass}) => {
    const[isHovered,setIsHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)
    console.log(isHovered)

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
    const shoppingIcon = isHovered && <FontAwesomeIcon icon={faShoppingCart} 
    className=" absolute z-10 right-3 top-3 text-[30px]"/>

  return (
    <div className={`relative ${imageClass} rounded-lg` }
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}
    >
        <img src={img.url}
        className='block w-full h-full object-cover '
        loading="lazy"  />
        {hovered()}
        {shoppingIcon}
    </div>
  )
}

export default Image
