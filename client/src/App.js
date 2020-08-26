import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      //communicates to state if a response has failed
      courses: ["whale", "squid", "turtle", "coral", "starfish"]
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <ul>{this.state.courses.map(name => <li key={this.state.courses}> {this.state.courses} </li>)}</ul>
      </div>
    );
  }
}

export default App;