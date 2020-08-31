import React from 'react';
import Header from '../components/Header';

export default class NotFound extends React.PureComponent {
    render() {
      return (
          <div>
              <hr></hr>
              <div className="bounds">
                <h1>Not Found</h1>
                <p>Sorry! We couldn't find the page you're looking for.</p>
              </div>
          </div>
      )
    }
  }