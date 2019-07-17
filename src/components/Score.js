import React from "react";
import ScoreBoard from "./ScoreBoard";

// By extending the React.Component class, Score inherits functionality from it
class Score extends React.Component {
  // Setting the initial state of the Score component
  state = {
    score: 0,

  };

 
  render() {
    return (
      <ScoreBoard
        score={this.state.score}
      />
    );
  }
}

export default Score;
