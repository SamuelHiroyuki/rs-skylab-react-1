import React, { Component } from "react";

class TechList extends Component {
	state = {
		techs: ["Node.js", "ReactJS", "React Native"]
	};

	render() {
		return (
			<ul>
				{this.state.techs.map(t => (
					<li>{t}</li>
				))}
			</ul>
		);
	}
}

export default TechList;
