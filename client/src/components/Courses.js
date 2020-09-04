import React, { useContext, useEffect} from 'react';
//import NewCourseButton from './NewCourseButton';
import { ApplicationContext } from './Context';

/*
This component provides the "Courses" screen by retrieving the list of courses from the REST API's /api/courses route and rendering a list of courses. 
Each course needs to link to its respective "Course Detail" screen. This component also renders a link to the "Create Course" screen.
*/

const Courses = () => {
  const { courses, actions } = useContext(ApplicationContext);

  useEffect(() => {

    actions.populateCourses();

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