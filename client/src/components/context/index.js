import React, { Component } from 'react'

const applicationContext = React.createContext();

export class Provider extends Component {
    state = {
        foods: "apple"
    }  
    render() {
        return (
          <applicationContext.Provider value={{
            foods: this.state.foods
          }}>
            { this.props.children }
          </applicationContext.Provider>
        );
      }    
}

export const Consumer = applicationContext.Consumer;