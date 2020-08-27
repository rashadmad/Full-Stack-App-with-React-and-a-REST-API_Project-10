import React from 'react';
import logo from '../logo.svg';

export default class Header extends React.PureComponent {
  render() {
    return (
        <div>
            <head>
                <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,500" rel="stylesheet" type="text/css"></link>
                <link href="https://fonts.googleapis.com/css?family=Cousine" rel="stylesheet" type="text/css"></link>
                <link href="../styles/global.css" rel="stylesheet"></link>
                <title>Courses</title>
            </head>

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
        </div>
    )
  }
}