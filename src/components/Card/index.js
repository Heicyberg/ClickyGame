import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card" onClick={()=>props.handler(props.id)}>
      <div className="img-container">
        <img alt={props.id} src={props.image} />
      </div>
    </div>
  );
}

export default Card;
