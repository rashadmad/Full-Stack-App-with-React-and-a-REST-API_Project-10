import React, { useState } from 'react'

export const applicationContext = React.createContext();

export const Provider = (props) => {
    const [ foods ] = useState("apple")
    return (
        <applicationContext.Provider value={{
            foods
            }}>
            { props.children }
        </applicationContext.Provider>
    )
}  
