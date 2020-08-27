import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Head from './components/Head.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      //communicates to state if a response has failed
      courses: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/courses', {
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

  render() {
    return (
      <div className="App">
        <Head />
        <Header />
        <div>
          <ul>{this.state.courses.map(course => <li key={course.title}> {course.title} </li>)}</ul>
        </div>
      </div>
    );
  }
}

export default App;