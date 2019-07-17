import React from "react";
import "./style.css";

function ScoreBoard(props) {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-12 d-flex justify-content-center">
        <div className="scoreboard justify-content-center align-middle">
          <div className="row justify-content-center">
            <div className="col-8"><h1 className="scores">Score:</h1></div>
            <div className="col-4"><h1 className="score">{props.score}</h1></div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default ScoreBoard;
