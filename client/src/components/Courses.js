import React from 'react';
//import NewCourseButton from './NewCourseButton';
import {
    BrowserRouter,
    Link,
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
                    <Link
                      path="/CourseDetail" 
                      render={() => <CourseDetail />}
                      className="course--module course--link"
                    >
                      <h4 className="course--label">Courses</h4>
                      <h3 className="course--title">{course.title}</h3>
                    </Link>
                  </div>
                ))}
                <div class="grid-33">
                  <Link class="course--module course--add--module" path="/createCourse" render={() => <CreateCourse />}>
                    <h3 class="course--add--title">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 13 13"
                        class="add"
                      >
                        <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                      </svg>
                      New Course
                    </h3>
                  </Link>
                </div>
              </div>
            </Switch>
          </BrowserRouter>
        );
    }
}

