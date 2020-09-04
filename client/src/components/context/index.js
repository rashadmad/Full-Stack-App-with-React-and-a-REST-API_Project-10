import React, { useState } from 'react'

export const applicationContext = React.createContext();

export const Provider = (props) => {
       
    const [ courses,changeCourses ] = useState([]);

    populateCourses=()=>{
        changeCourses( prevState =>{
            prevState.push("Apple");
        })
    }

    return (
        <applicationContext.Provider value={{
            courses
            }}>
            { props.children }
        </applicationContext.Provider>
    )
}  
