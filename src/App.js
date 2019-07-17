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

  //Create an empty that will contain the ID of all of the cards that are clicked.  
  //As each card is clicked, the array is checked to see if that ID was already clicked.
  //if the array contains that ID, then the game is over.  If the array does not contain the ID, we push the ID to the array.
  clickedArray = []

  checkClick = (id) => {
    console.log("clickedArray:",this.clickedArray)
    console.log("id",id)
    if (this.clickedArray.includes(id)) {
      //GAME OVER
      console.log("GAME OVER!")
      //Reset the Score to 0
      this.setState({ score: this.state.score = 0})
      //Shuffle the Colleges and Rerender them for a new game
      this.shuffleColleges();
    }

    else {
      console.log("This wasn't clicked yet")
      //The clicked ID wasn't in the array, so we'll push it to the array.
      this.clickedArray.push(id)
      console.log("Updated clickedArray:",this.clickedArray)
      //Increment the Score
      this.setState({ score: this.state.score + 1 });
      //Reshuffle the cards and render for the next guess
      this.shuffleColleges()
      
      console.log("Now clicked is:", this.state.id)
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
              id={colleges.id}
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
