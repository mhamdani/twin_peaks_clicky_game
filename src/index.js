import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import Targets from './components/Targets';
import people from './people.json';


const selectedFriends = [0];

class PeopleButton extends React.Component {
  state = {
  score: 0,
  highscore: 0,
  people,
  selectedFriends,
};

alreadySelected = (id) => {
    // If selected toon is not in the array, then push him in there, and add 1 to the score.
    if (this.state.selectedFriends.indexOf(id) === -1) {
      this.state.selectedFriends.push(id);
      this.setState({ score: this.state.score + 1 });
      this.shuffle(this.state.people);
      console.log(`Current Score: ${this.state.score}`);
    } else {
    // if selected toon is in the array, game over, reset score, reset selectedFriends array. If high score, set new high score.
      if (this.state.score > this.state.highscore) {
        this.setState({ highscore: this.state.highscore = this.state.score });
      }
      this.setState({ score: this.state.score = 0 });
      this.setState({ selectedFriends: this.state.selectedFriends = [0] });
      console.log(`Current Score: ${this.state.score}`);
    }
  }

shuffle = (people) => {
  let currentIndex = people.length,
  temporaryValue,
  randomIndex;

  while (currentIndex !==0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = people[currentIndex];
    people[currentIndex] = people[randomIndex];
    people[randomIndex] = temporaryValue;
  }
  return people;
}

  render() {
    return (
      <div>
      <Header
      currentScore={this.state.score}
      highScore={this.state.highscore} />
      <Jumbo />
      <div className="container">
        {this.state.people.map(person => (
          <Targets
          alreadySelected={this.alreadySelected}
          id={person.id}
          image={person.image} />
      ))}
      </div>
    </div>

  );
    // const peopleList = people.map((person, i) =>
    // <ul>
    // <li key={'person_' + i}>
    // <button className="imgButtons">
    // <img src={person} height="200px" weight="163"/>
    // </button>
    // </li>
    // </ul>
    // );
    // return (
    //   <div>
    //   <ul>
    //   {peopleList}
    //   </ul>
    //   </div>
    // );
  }
};

ReactDOM.render(<PeopleButton />, document.getElementById('app')
);
