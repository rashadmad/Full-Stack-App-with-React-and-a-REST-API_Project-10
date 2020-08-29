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
            <Route path="/courses/:id" component={CourseDetail} />
            <Route path="/courses/create" component={CreateCourse} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;