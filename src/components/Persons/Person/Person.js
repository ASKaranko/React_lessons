import React, {Component} from "react";
import classes from './Person.css';

// import styled from 'styled-components';

// styled уже возращает React component, достаточно только присвоить ему имя
// const StyledDiv = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;
//
//   @media (min-width: 500px) {
//     width: 450px;
//   }
// `;

class Person extends Component {
	// const style = {
	// 	'@media (min-width: 500px)': {
	// 		width: '450px',
	// 	}
	// };

	render() {
		console.log('[Person.js] rendering...')
		return (
				// <div className="Person" style={style}>
				// 	<StyledDiv>
				<div className={classes.Person}>
					<p onClick={this.props.click}>
						I'm a {this.props.name} and I am {this.props.age} years old!
					</p>
					<p>{this.props.children}</p>
					<input type="text"
								 onChange={this.props.changed}
								 value={this.props.name}/>
				</div>
				// </StyledDiv>
				// </div>
		);
	}
}

export default Person;