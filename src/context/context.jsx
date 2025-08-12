import { createContext, useContext, useEffect, useState } from "react"
export const Context = createContext()
import PropTypes from "prop-types"

const ContextProvider = ({children}) => {
    const [allPhotos,setAllPhotos] = useState([])
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

  return (
    <div>
      <Context.Provider value={{allPhotos,
        toggleFavorite
      }}>
            {children}
      </Context.Provider>
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

export default ContextProvider
