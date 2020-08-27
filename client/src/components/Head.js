import React from 'react';

export default class Head extends React.PureComponent {
    render() {
      return (
            <head>
                <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,500" rel="stylesheet" type="text/css"></link>
                <link href="https://fonts.googleapis.com/css?family=Cousine" rel="stylesheet" type="text/css"></link>
                <link href="./src/styles/global.css" rel="stylesheet"></link>
                <link href="./src/App.css" rel="stylesheet"></link>
                <title>Courses</title>
            </head>
        )
    }
}