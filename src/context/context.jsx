import { createContext, useContext } from "react"
export const Context = createContext()

const ContextProvider = ({children}) => {
  return (
    <div>
      <Context.Provider value={" "}>
            {children}
      </Context.Provider>
    </div>
  )
}

export default ContextProvider
