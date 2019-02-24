import React from 'react';

function Header(props) {
    return (
      <div className="p-2 m-2 text-center">
        <div className="row">
           <div className="col-4 text-lg text-danger">Socre:{props.score} </div>
           <div className="col-4"> {props.message}</div>
           <div className="col-4 text-lg text-warning">Highest Record:{props.record}</div>
        </div>
        
      </div>
      

    );
  }
  
  export default Header
  