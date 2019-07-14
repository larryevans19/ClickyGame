import React, { Component } from 'react';
import College from "./components/College";
import colleges from "./college.json";

import './App.css';
// import { partition } from 'rxjs';

class App extends Component {

  state = {
    colleges,
    clicked: false,
  };

  render() {
    return (
      <div className="container">
        {this.state.colleges.map(colleges => (
          <College
            name={colleges.name}
            image={colleges.image}
          />

        ))}
      </div>

      // <College
      //   name={colleges[1].name}
      //   image={colleges[1].image}
      // />
      // <College
      //   name={colleges[2].name}
      //   image={colleges[2].image}
      // />
    
    )
  }
}

export default App;
