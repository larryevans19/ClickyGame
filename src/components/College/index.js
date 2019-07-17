import React from "react";
import "./style.css";


function College(props) {
  return (
    <div className="card d-flex justify-content-center" id={props.name} onClick={() => props.checkClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div >

  );
}

export default College;
