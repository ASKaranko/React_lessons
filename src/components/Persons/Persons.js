import React, {PureComponent} from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
	// static getDerivedStateFromProps(props, state) {
	// 	console.log('[Persons.js] GetDerivedStateFromProps');
	// 	return state;
	// }

	// Старый lifecycle hook - не используется более
	// componentWillReceiveProps(nextProps) {
	// 	console.log('[Persons.js] componentWillReceiveProps', nextProps);
	// }

	// Если мы проверяем все props, а не определенные, то используется PureComponent
	// Он реализует метод shouldComponentUpdate по умолчанию со всеми props
	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('[Persons.js] ShouldComponentUpdate');
	// 	// Данное сравнение работает, так как в nameChangeHandler
	// 	// мы создаем новый массив и меняет, соответственно, pointer на массив
	// 	return (nextProps.persons !== this.props.persons ||
	// 			nextProps.changed !== this.props.changed ||
	// 			nextProps.clicked !== this.props.clicked);
	// }

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate');
		return {message: 'Snapshot!'};
	}

	// Старый lifecycle hook - не используется более
	// componentWillUpdate(nextProps, nextState, nextContext) {
	//
	// }

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Persons.js] componentDidUpdate');
		console.log(snapshot);
	}

	componentWillUnmount() {
		console.log('[Persons.js] componentWillUnmount');
	}

	render() {
		console.log('[Persons.js] rendering...');
		return this.props.persons.map((person, index) => {
			return <Person
					click={() => this.props.clicked(index)}
					name={person.name}
					age={person.age}
					changed={(event) => this.props.changed(event, person.id)}
					key={person.id}
			/>
		});
	}
}

export default Persons;