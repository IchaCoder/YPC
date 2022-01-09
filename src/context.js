import React, { useState, useContext } from "react";

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isMenuOpen,setIsMenuOpen] = useState(false)

    return <AppContext.Provider value={{
        isMenuOpen,
        setIsMenuOpen
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider,AppContext}