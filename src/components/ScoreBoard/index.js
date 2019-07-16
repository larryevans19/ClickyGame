import React from "react";
import "./style.css";

function ScoreBoard(props) {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6 col-sm-12 justify-content-center">
        <div className="scoreboard justify-content-center align-middle">
          <div className="row">
            <div className="col-8"><h1 className="scores">Score:</h1></div>
            <div className="col-4"><h1 className="score">{props.score}</h1></div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-12 justify-content-center">
        <div className="scoreboard justify-content-center align-middle">
          <div className="row">
            <div className="col-8"><h1 className="scores">High Score:</h1></div>
            <div className="col-4"><h1 className="score">{props.highScore}</h1></div>
          </div>
        </div>
      </div>

    </div>


  );
}

export default ScoreBoard;
