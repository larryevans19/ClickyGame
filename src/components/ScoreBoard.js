import React from "react";

function ScoreBoard(props) {
  return (
    <div className="scoreboard">
      <p className="card-text">Score: {props.score}</p>
      <button className="btn btn-primary" onClick={props.handleIncrement}>
        Increment
      </button>{" "}
      <button className="btn btn-danger" onClick={props.handleReset}>
        Reset
      </button>
    </div>
  );
}

export default ScoreBoard;
