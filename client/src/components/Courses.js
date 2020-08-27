import React from 'react';
/*
This component provides the "Courses" screen by retrieving the list of courses from the REST API's /api/courses route and rendering a list of courses. 
Each course needs to link to its respective "Course Detail" screen. This component also renders a link to the "Create Course" screen.
*/

export default class Courses extends React.PureComponent {
    render() {
        return (
            <div class="bounds">
                {this.props.courseData.map(course => 
                    <div class="grid-33" key={course.id}> 
                        <a class="course--module course--link" href="course-detail.html">
                            <h4 class="course--label">Courses</h4>
                            <h3 class="course--title">{course.title}</h3>
                        </a>
                    </div>
                )}
            </div>
        )
    }
}
