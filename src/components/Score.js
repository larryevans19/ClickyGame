import React from "react";
import ScoreBoard from "./ScoreBoard";

// By extending the React.Component class, Score inherits functionality from it
class Score extends React.Component {
  // Setting the initial state of the Score component
  state = {
    score: 0
  };

  // handleIncrement increases this.state.score by 1
  handleIncrement = () => {

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
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          ScoreBoard
        </div>
        <ScoreBoard
          score={this.state.score}
          handleIncrement={this.handleIncrement}
          handleReset={this.handleReset}
        />
      </div>
    );
  }
}

export default Score;
