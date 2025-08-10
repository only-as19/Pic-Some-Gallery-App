import { createContext, useContext, useEffect, useState } from "react"
export const Context = createContext()

const ContextProvider = ({children}) => {
    const [allPhotos,setAllPhotos] = useState([])

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then(response => response.json())
        .then(data=> setAllPhotos(data))
    },[])
    console.log(allPhotos)

  return (
    <div>
      <Context.Provider value={{allPhotos}}>
            {children}
      </Context.Provider>
    </div>
  )
}

export default ContextProvider
