import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Andrei', age: 35},
      {name: 'Stepan', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  });

  const [otherState, setOtherState] = useState({otherState: 'some other value'});

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked');
    // DO NOT MUTATE STATE DIRECTLY this.state.persons[0].name = 'Andrei Karanko';
    setPersonsState({
      persons: [
        {name: 'Andrei Karanko', age: 35},
        {name: 'Stepan', age: 29},
        {name: 'Stephanie', age: 30}
      ],
    });
  }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi, I\'m React App'));
}

export default app;