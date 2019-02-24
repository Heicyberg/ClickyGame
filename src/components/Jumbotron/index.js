import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 145, clear: "both", paddingTop: 30, paddingLeft:40, textAlign: "left" }}
      className="jumbotron"
    >
      <div>
           <h4>Here's the challange: identy seven different actress among the pictures</h4>
           <h4>Tips: don't click one person twice </h4>
      </div>
      
      {children}
    </div>
  );
}

export default Jumbotron;
