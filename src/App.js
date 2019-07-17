import React, { Component } from 'react';
import College from "./components/College";
import Navbar from "./components/Navbar";
import ScoreBoard from "./components/ScoreBoard";
// import colleges from "./college.json";

import './App.css';
// import { partition } from 'rxjs';


// Use 'require' in order to serve local images
const colleges = [
  {
    "id": 1,
    "name": "GeorgiaTech",
    "image": require("./images/GT.png"),
    "clicked": false
  },

  {
    "id": 2,
    "name": "Duke",
    "image": require("./images/Duke.png"),
    "clicked": false
  },

  {
    "id": 3,
    "name": "Pitt",
    "image": require("./images/Pitt.png"),
    "clicked": false
  },

  {
    "id": 4,
    "name": "FSU",
    "image": require("./images/FSU.png"),
    "clicked": false
  },

  {
    "id": 5,
    "name": "Miami",
    "image": require("./images/Miami.png"),
    "clicked": false
  },

  {
    "id": 6,
    "name": "VirginiaTech",
    "image": require("./images/VT.png"),
    "clicked": false
  },

  {
    "id": 7,
    "name": "Virginia",
    "image": require("./images/UVA.png"),
    "clicked": false
  },

  {
    "id": 8,
    "name": "UNC",
    "image": require("./images/UNC.png"),
    "clicked": false
  },

  {
    "id": 9,
    "name": "BostonCollege",
    "image": require("./images/BC.png"),
    "clicked": false
  },

  {
    "id": 10,
    "name": "Clemson",
    "image": require("./images/Clemson.png"),
    "clicked": false
  },

  {
    "id": 11,
    "name": "NCSU",
    "image": require("./images/NCSU.png"),
    "clicked": false
  },

  {
    "id": 12,
    "name": "Syracuse",
    "image": require("./images/Cuse.png"),
    "clicked": false
  },

  {
    "id": 13,
    "name": "WakeForest",
    "image": require("./images/WF.png"),
    "clicked": false
  },

  {
    "id": 14,
    "name": "Louisville",
    "image": require("./images/Ville.png"),
    "clicked": false
  },

  {
    "id": 15,
    "name": "NotreDame",
    "image": require("./images/ND.png"),
    "clicked": false
  }

]
class App extends Component {

  state = {
    colleges,
    score: 0
  };

  checkClick = (clicked) => {
    if (!this.state.clicked) {
      console.log("This wasn't clicked yet")
      this.setState({ score: this.state.score + 1 });
      this.shuffleColleges()
      this.college.clicked = true
      console.log("Now clicked is:", this.state.clicked)
    }

  }

  shuffleColleges = () => {

    let colleges = this.state.colleges

    for (let i = colleges.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let shuffleArray = colleges[i];
      colleges[i] = colleges[j];
      colleges[j] = shuffleArray;
    }
    
    this.setState({ college: colleges })

  }

  render() {
    return (
      <div className="justify-content-center">
        <Navbar />
        <ScoreBoard
          score={this.state.score}
        />
        <div className="wrapper justify-content-center">
          {this.state.colleges.map(colleges => (
            <College
              name={colleges.name}
              image={colleges.image}
              clicked={colleges.clicked}
              checkClick={this.checkClick}
            />
          ))}

        </div>
      </div>
    )
  }
}



export default App;
