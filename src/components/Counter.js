// import React from 'react';
// // import PeopleImg from 'index.js';
// import PanelBody from './PanelBody.js';

export class Counter extends React.Component {
  state = {
    count: 0
  };
  handleIncrement = () => {
  this.setState({ count: this.state.count + 1 });
};

render() {
  return (
    <div className="panel panel-primary">
    <div className="panel-heading">Click the images!</div>
    <Panel body
    count={this.state.count}
    handleIncrement={this.handleIncrement} />
    </div>
  );
}
}

//
// class Counter extends React.Component {
//   state = {
//     count: 0
//   };
//   constructor(props) {
//     super(props);
//     this.state = { clicked: 0 };
//     this.toggleClicked = this.toggleClicked.bind(this);
//   }
//     toggleClicked() {
//       const newClicked = this.state.clicked == 0 ? 1 : null;
//       this.setState({ clicked: newClicked });
//     }
//     render() {
//       <div>
//       <button onClick={this.toggleClicked}>
//       {peopleList}
//     }
//   }
// }
