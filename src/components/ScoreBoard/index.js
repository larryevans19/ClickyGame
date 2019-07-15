import React from "react";
import "./style.css";

function ScoreBoard(props) {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6 col-sm-12 justify-content-center">
        <div className="scoreboard justify-content-center align-middle">
          <h1 className="scores">Score: {props.score}</h1>
        </div>
      </div>
      <div className="col-md-6 col-sm-12 justify-content-center">
        <div className="scoreboard justify-content-center align-middle">
          <h1 className="scores">High Score: {props.highScore}</h1>
        </div>
      </div>
    </div>
    
    );
}

export default ScoreBoard;
