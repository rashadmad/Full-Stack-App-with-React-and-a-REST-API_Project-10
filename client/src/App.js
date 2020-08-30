import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Head from './components/Head';
import Courses from './components/Courses';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
//components
import CourseDetail from './components/CourseDetail'
import CreateCourse from './components/CreateCourse'
import UpdateCourse from './components/UpdateCourse'
import UserSignUp from './components/UserSignUp'
import UserSignIn from './components/UserSignIn'
import UserSignOut from './components/UserSignOut'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Head />
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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;