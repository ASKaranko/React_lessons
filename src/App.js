import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from "./Person/Person";

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
    const style = {
      backgroundColor: 'green',
			color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if (this.state.showPersons) {

      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person
                      click={() => this.deletePersonHandler(index)}
                      name={person.name}
                      age={person.age}
                      key={person.id}
                      changed={(event) => this.nameChangedHandler(event, person.id)}
                    />
            })}
          </div>
      );
			style.backgroundColor = 'red';
			style[':hover'] = {
        backgroundColor: 'tomato',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
			classes.push('red');
		}
    if (this.state.persons.length <= 1) {
    	classes.push('bold');
		}

    return (
        <StyleRoot>
          <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                style={style}
                onClick={this.togglePersonsHandler}>Toggle Persons
            </button>
            {persons}
          </div>
        </StyleRoot>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hi, I\'m React App'));
  }
}

export default Radium(App);