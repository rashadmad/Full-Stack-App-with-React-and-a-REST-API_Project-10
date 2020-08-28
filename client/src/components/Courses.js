import React from 'react';
//import NewCourseButton from './NewCourseButton';
import {
    BrowserRouter,
    Route,
    Switch
  } from "react-router-dom";

import CreateCourse from './CreateCourse';
import CourseDetail from './CourseDetail'

/*
This component provides the "Courses" screen by retrieving the list of courses from the REST API's /api/courses route and rendering a list of courses. 
Each course needs to link to its respective "Course Detail" screen. This component also renders a link to the "Create Course" screen.
*/

export default class Courses extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <div className="bounds">
                        {this.props.courseData.map((course) => (
                        <div className="grid-33" key={course.id}>
                            <Route path="/CourseDetail" className="course--module course--link" component={CourseDetail}>
                                <h4 className="course--label">Courses</h4>
                                <h3 className="course--title">{course.title}</h3>
                            </Route>
                        </div>
                        ))}
                        <Route path="/createCourse" component={CreateCourse} />
                    </div>
                </Switch>
            </BrowserRouter>
        );
    }
}

