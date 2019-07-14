import React from "react";
import "./style.css";

function College(props) {
  return (
    <div className="card" id={props.name}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default College;
