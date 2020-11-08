import React from "react";
import "./NewUserButton.css"

const NewUserButton = (props) => {
	const { openModal } = props;

	return(
		<div className="add-user__wrapper">
			<button className="add-user__button" onClick={() => openModal()}>Add user</button>
		</div>
	)
}

export default NewUserButton;