import React, { Component } from 'react';
import College from "./components/College";
import Navbar from "./components/Navbar";
import Score from "./components/Score";
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
      <div className="justify-content-center">
        <Navbar />
        <Score />
        <div className="wrapper justify-content-center">
          {this.state.colleges.map(colleges => (
            <College
              name={colleges.name}
              image={colleges.image}
            />
          ))}

        </div>
      </div>
    )
  }
}

export default App;
