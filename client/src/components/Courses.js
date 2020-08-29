import React from 'react';
import NewCourseButton from './NewCourseButton';

/*
This component provides the "Courses" screen by retrieving the list of courses from the REST API's /api/courses route and rendering a list of courses. 
Each course needs to link to its respective "Course Detail" screen. This component also renders a link to the "Create Course" screen.
*/

export default class Courses extends React.PureComponent {
    render() {
        return (
            <div className="bounds">
              {this.props.courseData.map((course) => (
                <div class="grid-33" key={course.id}>
                    <a
                      href={"/courses/" + course.id}
                      className="course--module course--link"
                    >
                    <h4 className="course--label">Courses</h4>
                    <h3 className="course--title">{course.title}</h3>
                  </a>
                </div>
              ))}
              <NewCourseButton />
            </div>
        );
    }
}
