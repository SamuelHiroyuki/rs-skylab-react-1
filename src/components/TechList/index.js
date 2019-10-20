import React, { Component } from "react";

import TechListItem from "../TechListItem";

class TechList extends Component {
	// static defaultProps = {}; // defaultProps - class
	// static propTypes = {}; // propTypes - class

	state = {
		inputValue: "",
		techs: ["Node.js", "ReactJS", "React Native"]
	};

	handleInputChange = ({ target: { value: inputValue } }) => {
		this.setState({ inputValue });
	};

	handleInputSubmit = e => {
		e.preventDefault();

		this.setState(prevState => ({
			techs: [...prevState.techs, prevState.inputValue],
			inputValue: ""
		}));
	};

	handleDelete = tech => {
		this.setState(prevState => ({
			techs: prevState.techs.filter(t => t !== tech)
		}));
	};

	render() {
		const { inputValue } = this.state;

		return (
			<form onSubmit={this.handleInputSubmit}>
				<input
					type="text"
					value={inputValue}
					onChange={this.handleInputChange}
				/>
				<button type="submit">Adicionar</button>

				<ul>
					<TechListItem />
					{this.state.techs.map(t => (
						<TechListItem
							tech={t}
							key={t}
							onDelete={() => this.handleDelete(t)}
						/>
					))}
				</ul>
			</form>
		);
	}
}

export default TechList;
