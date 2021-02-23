import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    persons: [
      {name: 'Andrei', age: 35},
      {name: 'Stepan', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('Was clicked');
    // DO NOT MUTATE STATE DIRECTLY this.state.persons[0].name = 'Andrei Karanko';
    this.setState({
      persons: [
        {name: 'Andrei Karanko', age: 35},
        {name: 'Stepan', age: 29},
        {name: 'Stephanie', age: 30}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi, I\'m React App'));
  }
}

export default App;