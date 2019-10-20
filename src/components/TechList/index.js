import React, { Component } from "react";

class TechList extends Component {
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
					{this.state.techs.map(t => (
						<li key={t}>
							<span>{t}</span>
							<button
								type="button"
								onClick={() => this.handleDelete(t)}
							>
								X
							</button>
						</li>
					))}
				</ul>
			</form>
		);
	}
}

export default TechList;
