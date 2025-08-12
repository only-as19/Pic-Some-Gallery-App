import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Image = ({img,imageClass}) => {
    const[isHovered,setIsHovered] = useState(false)
    console.log(isHovered)

    const hovered = isHovered && <FontAwesomeIcon icon={faHeart} 
    className=" absolute z-10 left-3 top-3 text-[30px]"/>
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
        {hovered}
        {shoppingIcon}
    </div>
  )
}

export default Image
