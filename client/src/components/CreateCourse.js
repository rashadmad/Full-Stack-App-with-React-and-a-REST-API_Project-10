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
                    <div class="grid-66">
                        <div class="course--header">
                            <h4 class="course--label">Course</h4>
                            <div>
                                <input id="title" name="title" type="text" class="input-title course--title--input" placeholder="Course title..."value="">               </div>
                            <p>By Joe Smith</p>
                        </div>
                        <div class="course--description">
                            <div><textarea id="description" name="description" class="" placeholder="Course description..."></textarea></div>
                        </div>
                    </div>
                    <div class="grid-100 pad-bottom"><button class="button" type="submit">Create Course</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button></div>
                </div>
              </form>
            </div>
          </div>     
        )
    }  
}      