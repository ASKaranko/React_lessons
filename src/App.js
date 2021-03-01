import React, { Component } from 'react';

// благодаря css модулям создается объект classes
// localIdentName добавляет для каждого компонента свои хеш
// поэтому этот класс будет уникальным для каждого компонента
/*
And if you import the CSS file (in the same way) in another component,
the classes  object there will hold a Post  property which yields
a different (!) CSS class name. Hence it's scoped to a given component

By the way, if you somehow also want to define
a global (i.e. un-transformed) CSS class in such a .css  file,
you can prefix the selector with :global
:global .Post { ... }

Now you can use className="Post"
anywhere in your app and receive that styling.
 */
import classes from './App.css';
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//
//   &:hover {
//   background-color: ${props => props.alt ? 'tomato' : 'lightgreen'};
//   color: black;
//   }
// `;

class App extends Component {

  state = {
    persons: [
      {id: 'as12', name: 'Andrei', age: 35},
      {id: 'as13', name: 'Stepan', age: 29},
      {id: 'as17', name: 'Stephanie', age: 27}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // лучше сначала копировать состояние полностью в новом массиве или объекте,
    // то есть immutable fashion, а уже затем вызывать setState()
    // slice() - копируем массив, а не берем reference на его pointer;
    // соответственно, не удаляем данные в состоянии state
    // const persons = this.state.persons.slice()

    // лучще исплользовать spread оператор
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);

    // Чтобы не мутировать объект в самом состоянии,
    // создаем новый объект с элементом
    const person = {...this.state.persons[personIndex]}
    //альтернатива - старый синтаксис
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
		// 	color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {

      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <ErrorBoundary key={person.id}>
                <Person
                      click={() => this.deletePersonHandler(index)}
                      name={person.name}
                      age={person.age}
                      changed={(event) => this.nameChangedHandler(event, person.id)}
                    />
              </ErrorBoundary>
            })}
          </div>
      );
			// style.backgroundColor = 'red';
			// style[':hover'] = {
      //   backgroundColor: 'tomato',
      //   color: 'black'
      // }

      //Синтаксис с css-модулями
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
		}
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
		}

    return (

          <div className={classes.App}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={this.togglePersonsHandler}>Toggle Persons
            </button>
            {persons}
          </div>


    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi, I\'m React App'));
  }
}

export default App;