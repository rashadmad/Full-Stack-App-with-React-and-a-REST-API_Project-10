import React, { useContext, useEffect} from 'react';
//import NewCourseButton from './NewCourseButton';
import { ApplicationContext } from './Context';

/*
This component provides the "Courses" screen by retrieving the list of courses from the REST API's /api/courses route and rendering a list of courses. 
Each course needs to link to its respective "Course Detail" screen. This component also renders a link to the "Create Course" screen.
*/

const Courses = () => {
  const { courses } = useContext(ApplicationContext);

  useEffect(() => {
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
  }, []);

  // emptyCourses() {
  //   this.setState({
  //     courses: []
  //   });
  // }

  // componentDidMount() {
  //   this.populateCourses()
  // }

  // componentWillUnmount() {
  //   this.emptyCourses()
  //   this.populateCourses()
  // }

    return (
      <h1>{ courses }</h1>
        // <div className="bounds">
        //   {this.state.courses.map((course) => (
        //     <div className="grid-33" key={course.id}>
        //         <a
        //           href={"/courses/" + course.id}
        //           className="course--module course--link"
        //         >
        //         <h4 className="course--label">Courses</h4>
        //         <h3 className="course--title">{course.title}</h3>
        //       </a>
        //     </div>
        //   ))}
        //   <NewCourseButton />
        // </div>
    );
}

export default Courses;