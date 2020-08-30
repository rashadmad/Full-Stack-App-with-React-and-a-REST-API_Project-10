import React from 'react';
import NewCourseButton from './NewCourseButton';

/*
This component provides the "Courses" screen by retrieving the list of courses from the REST API's /api/courses route and rendering a list of courses. 
Each course needs to link to its respective "Course Detail" screen. This component also renders a link to the "Create Course" screen.
*/

export default class Courses extends React.PureComponent {

  constructor() {
    super()
    this.populateCourses = this.populateCourses.bind(this);
    this.emptyCourses = this.emptyCourses.bind(this);
    this.state = {
      //communicates to state if a response has failed
      courses: []
    }
  }

  populateCourses() {
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
      .then(courses => this.setState({courses}, () => console.log('courses fetched...',courses)))
  }

  emptyCourses() {
    this.setState({
      courses: []
    });
  }

  componentDidMount() {
    this.populateCourses()
  }

  componentWillUnmount() {
    this.emptyCourses()
    this.populateCourses()
  }

    render() {
        return (
            <div className="bounds">
              {this.state.courses.map((course) => (
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
