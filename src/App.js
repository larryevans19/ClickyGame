import React, { Component } from 'react';
import College from "./components/College";
import Navbar from "./components/Navbar";
import Score from "./components/Score";
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
