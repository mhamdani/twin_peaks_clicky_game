import React from 'react';
import Overdrive from 'react-overdrive';
import './Targets.css';


const Targets = props => (

  <div onClick={() => props.alreadySelected(props.id)} className="card">
    <div className="img-container target">
      <Overdrive id={props.id}>
      <div role="img"
        aria-label="click item"
        style={{ backgroundImage: 'url("${props.image}")' }} />
      </Overdrive>
    </div>
  </div>

);

export default Targets;
