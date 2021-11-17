import React, { useState, useContext, createContext } from 'react'

const Context = createContext()

const Provider = ({children}) => {
    const [isSide, setIsSide] = useState(false)

    const handleSide = (e) => {
        e.stopPropagation()
        setIsSide(!isSide)
    }

    const handleClose = () => setIsSide(false)

    return (
        <Context.Provider value={{
            isSide,
            handleSide,
            handleClose
        }}>
            {children}
        </Context.Provider>
    )
}

const useData = () => useContext(Context)

export { Provider, useData }
