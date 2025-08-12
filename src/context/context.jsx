import { createContext, useContext, useEffect, useState } from "react"
export const Context = createContext()
import PropTypes from "prop-types"

const ContextProvider = ({children}) => {
    const [allPhotos,setAllPhotos] = useState([])
    const [cartItem,setCartItem] = useState([])
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then(response => response.json())
        .then(data=> setAllPhotos(data))
    },[])
    console.log(allPhotos)

    const toggleFavorite = (id)=>{
      const uppdatedArr = allPhotos.map(photo=>{
        if(photo.id===id){
          return{
            ...photo,
            isFavorite: !photo.isFavorite
          }
        }
        return photo
      })
      setAllPhotos(uppdatedArr)
    }

    const addToCart = (newItem)=>{
      setCartItem(prev=> [...prev,newItem])
    }

  return (
    <div>
      <Context.Provider value={
        {
          allPhotos,
          toggleFavorite,
          addToCart,
          cartItem
      }}>
            {children}
      </Context.Provider>
    </div>
  )
}



export default ContextProvider
