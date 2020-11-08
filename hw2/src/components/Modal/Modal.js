import React from "react";
import "./Modal.css"

import CustomInput from "../CustomInput/CustomInput";

const Modal = (props) => {
	const { active, closeModal, pushNewUser } = props;
	const customInputData = [
		{
			forName: "name",
			labelValue: "Name",
			inputType: "text",
			idName: "name"
		},
		{
			forName: "username",
			labelValue: "Username",
			inputType: "text",
			idName: "username"
		},
		{
			forName: "email",
			labelValue: "Email",
			inputType: "text",
			idName: "email"
		},
		{
			forName: "phone",
			labelValue: "Phone",
			inputType: "text",
			idName: "phone"
		}
	];
	const newUser = {};

	const handleClick = () => {
		closeModal();
		pushNewUser(newUser);
	}

	const inputValueCollector = (id, value) => {
		newUser[id] = value;
	}

	return(
		<div className={active ? "modal active" : "modal"}>
			<div className={active ? "modal__content active" : "modal__content"}>
				<div className="modal__content-main">
					{customInputData.map((item, index) => (
						<CustomInput {...item} key={item.idName} valueCollector={inputValueCollector} />
					))}
				</div>
				<div className="modal__content-footer">
					<button className="modal__button" onClick={handleClick}>Ok</button>
				</div>
			</div>
		</div>
	)
}

export default Modal;