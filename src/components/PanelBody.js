// import React from 'react';
// import { imgButtons } from 'index.js';

const PanelBody = props => (
  <div className="panel-body text center">
  <p>Click Count: {props.count}</p>
  <p>Highest Score: {props.count}</p>
  <button onClick={props.handleIncrement}>{imgButtons}</button>
  </div>
);

export default PanelBody
