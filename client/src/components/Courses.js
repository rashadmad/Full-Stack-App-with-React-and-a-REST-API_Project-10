import React from 'react';
import NewCourseButton from './NewCourseButton';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CourseDetail from './CourseDetail'

/*
This component provides the "Courses" screen by retrieving the list of courses from the REST API's /api/courses route and rendering a list of courses. 
Each course needs to link to its respective "Course Detail" screen. This component also renders a link to the "Create Course" screen.
*/

export default class Courses extends React.PureComponent {
    render() {
        return (
          <Router>
            <div class="bounds">
              {this.props.courseData.map((course) => (
                <div class="grid-33" key={course.id}>
                  <Route
                    path="/courseDetail"
                    class="course--module course--link"
                    href="course-detail.html"
                    component={CourseDetail}
                  >
                    <h4 class="course--label">Courses</h4>
                    <h3 class="course--title">{course.title}</h3>
                  </Route>
                </div>
              ))}
              <NewCourseButton />
            </div>
          </Router>
        );
    }
}
