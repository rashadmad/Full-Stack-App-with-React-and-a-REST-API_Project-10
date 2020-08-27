import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <head>
        <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,500" rel="stylesheet" type="text/css"></link>
        <link href="https://fonts.googleapis.com/css?family=Cousine" rel="stylesheet" type="text/css"></link>
        <link href="./src/styles/global.css" rel="stylesheet"></link>
        <link href="./src/App.css" rel="stylesheet"></link>
        <title>Courses</title>
      </head>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
