import React, { Component } from "react";

export default function TechListItem({ tech, onDelete }) {
	return (
		<li>
			<span>{tech}</span>
			<button type="button" onClick={onDelete}>
				X
			</button>
		</li>
	);
}
