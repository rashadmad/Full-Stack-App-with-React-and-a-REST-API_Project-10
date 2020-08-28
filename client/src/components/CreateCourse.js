import React from 'react';

/*
    This component provides the "Create Course" screen by rendering a form that allows a user to create a new course. 
    The component also renders a "Create Course" button that when clicked sends a POST request to the REST API's /api/courses route. 
    This component also renders a "Cancel" button that returns the user to the default route (i.e. the list of courses).
*/

export default class Courses extends React.PureComponent {
    render() {
        return (
            <div class="bounds course--detail">
            <h1>Create Course</h1>
            <div>
              <div>
                <h2 class="validation--errors--label">Validation errors</h2>
                <div class="validation-errors">
                  <ul>
                    <li>Please provide a value for "Title"</li>
                    <li>Please provide a value for "Description"</li>
                  </ul>
                </div>
              </div>
              <form>
              </form>
            </div>
          </div>     
        )
    }  
}      