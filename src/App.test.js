import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

const people = ['andy', 'audrey', 'bobby', 'dale', 'ed', 'james', 'josie', 'laura', 'leland', 'lucy', 'nadine', 'shelly'];

const peopleList = people.map((person, i) =>
<li key={'person_' + i}>{person}</li>
);

ReactDOM.render(<ul>{peopleList}</ul>, document.getElementById('app')
);
