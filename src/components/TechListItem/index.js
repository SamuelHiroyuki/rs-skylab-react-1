import React, { Component } from "react";
import PropTypes from "prop-types";

function TechListItem({ tech, onDelete }) {
	return (
		<li>
			<span>{tech}</span>
			<button type="button" onClick={onDelete}>
				X
			</button>
		</li>
	);
}

TechListItem.defaultProps = {
	tech: "Set tech property"
};

TechListItem.propTypes = {
	tech: PropTypes.string,
	onDelete: PropTypes.func.isRequired
};

export default TechListItem;
