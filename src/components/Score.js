import React from "react";
import ScoreBoard from "./ScoreBoard";

// By extending the React.Component class, Score inherits functionality from it
class Score extends React.Component {
  // Setting the initial state of the Score component
  state = {
    score: 0,
    highScore: 7
  };

  // handleIncrement increases this.state.score by 1
  handleScore = () => {

    this.setState({ score: this.state.score + 1 });
  };

  // handleReset resets this.state.score to 0
  handleReset = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score = 0 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <ScoreBoard
        score={this.state.score}
 
        highScore={this.state.highScore}
      />
    );
  }
}

export default Score;
