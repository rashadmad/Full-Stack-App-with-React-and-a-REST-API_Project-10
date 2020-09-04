import React, { useState } from 'react'

export const ApplicationContext = React.createContext();

export const Provider = (props) => {
       
    const [ courses ] = useState([]);

    const handleCoursesChange=()=>{
        fetch('http://localhost:5000/api/courses', {
            method: 'GET',
            credentials: 'same-origin',
            redirect: 'follow',
            agent: null,
            headers: {
                "Content-Type": "text/plain",
                'Authorization': 'Basic ' + btoa('gino@coolcats.com:password'),
            },
            timeout: 5000 
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log('Error fetching and parsing data', error))
            .finally(console.log({ courses }))
    };

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
