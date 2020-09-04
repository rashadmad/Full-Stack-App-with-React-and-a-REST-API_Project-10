import React, { useState } from 'react'

export const ApplicationContext = React.createContext();

export const Provider = (props) => {
       
    const [ courses,changeCourses ] = useState([]);

    const handleCoursesChange=()=>{
        changeCourses( prevState =>{
            const newCourseList = [ ...prevState ]
            newCourseList.push("apple");
        })
    }

    return (
        <ApplicationContext.Provider value={{
            courses,
            actions: {
                populateCourses: handleCoursesChange
              }
            }}>
            { props.children }
        </ApplicationContext.Provider>
    )
}  
