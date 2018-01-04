import React from 'react';
import './Header.css';

const Header = props => (

  <div>
    <div className="navbar navbar-expand-lg navbar-light bg-dark fixed-top" >
      <h2 className="navbar brand text-light"><span id="twin_peaks">Twin Peaks</span> <span id="clicky">Clicky Game</span></h2>
      <h3 className="nav-link text-light text-right">Your Score: <span>{props.currentScore}</span></h3>
      <h3 className="nav-link text-light text-right">High Score: <span>{props.highScore}</span></h3>
    </div>
  </div>

);

export default Header;
