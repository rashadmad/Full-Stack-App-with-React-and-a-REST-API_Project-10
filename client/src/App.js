import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
//components
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail'
import CreateCourse from './components/CreateCourse'
import UpdateCourse from './components/UpdateCourse'
import UserSignUp from './components/UserSignUp'
import UserSignIn from './components/UserSignIn'
import UserSignOut from './components/UserSignOut'
import NotFound from './components/NotFound'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <hr></hr>
          <Switch>
            <Route exact path="/" component={Courses} />
            <Route path="/courses/signup" component={UserSignUp} />
            <Route path="/courses/signin" component={UserSignIn} />
            <Route path="/courses/signout" component={UserSignOut} />
            <Route path="/courses/create" component={CreateCourse} />
            <Route path="/courses/:id/update" component={UpdateCourse} />
            <Route path="/courses/:id" component={CourseDetail} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;