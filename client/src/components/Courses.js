import React from 'react';
import NewCourseButton from './NewCourseButton';
import {
    BrowserRouter,
    Route
  } from "react-router-dom";

import CreateCourse from './CreateCourse';

/*
This component provides the "Courses" screen by retrieving the list of courses from the REST API's /api/courses route and rendering a list of courses. 
Each course needs to link to its respective "Course Detail" screen. This component also renders a link to the "Create Course" screen.
*/

export default class Courses extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <div class="bounds">
                        <Route path="createCourse" component={CreateCourse} /> 
                    </div>
                </Switch>
            </BrowserRouter>
        );
    }
}
