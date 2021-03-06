import React, {useEffect} from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
	// если передать в dependencies useEffect пустой массив, то
	// он будет запущен только в componentDidMount, так как у него нет
	// зависимостей, значит они всегда одинаковы
	useEffect(() => {
		console.log('[Cockpit.js] useEffect')
		// Можем использовать side effect, например, http request
		const timer = setTimeout(() => {
			alert('Saved data to cloud!');
		}, 1000);
		return () => {
			clearTimeout(timer);
			console.log('[Cockpit.js] Cleanup work in useEffect');
		};
	}, []);

	// useEffect может использовать более одного раза, если разные данные
	// useEffect(() => {}, [props.persons]);

	useEffect(() => {
		console.log('[Cockpit.js] 2nd useEffect');
		return () => {
			console.log('[Cockpit.js] Cleanup work in 2nd useEffect');
		};
	});

	const assignedClasses = [];
	let btnClass = '';

	if (props.showPersons) {
		btnClass = classes.Red;
	}
	if (props.personsLength <= 2) {
		assignedClasses.push(classes.red);
	}
	if (props.personsLength <= 1) {
		assignedClasses.push(classes.bold);
	}
	return (
			<div className={classes.Cockpit}>
				<h1>{props.title}</h1>
				<p className={assignedClasses.join(' ')}>This is really working!</p>
				<button
						className={btnClass}
						onClick={props.clicked}>Toggle Persons
				</button>
			</div>
	);
};

// React.memo - это аналог shouldComponentUpdate в классовом компоненте
export default React.memo(cockpit);