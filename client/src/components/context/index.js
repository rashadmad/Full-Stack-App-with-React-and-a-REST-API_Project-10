import React, { useState } from 'react'

export const ApplicationContext = React.createContext();

export const Provider = (props) => {
       
    const [ courses ] = useState([]);

    return (
        <ApplicationContext.Provider value={{
            courses
            }}>
            { props.children }
        </ApplicationContext.Provider>
    )
}  
