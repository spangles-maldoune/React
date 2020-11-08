import React from 'react';
import "./CardsWrapper.css";

import UserCard from "../UserCard/UserCard";

class CardsWrapper extends React.Component {
	constructor(props) {
		super(props);

		this.addNewUser = this.addNewUser.bind(this);
	}

	addNewUser() {
		console.log('hii')
	}

	render() {
		const { usersList, removeUserCard } = this.props;

		return(
			<div className="users__wrapper">
				{usersList.map((user, index) => (
					<UserCard
						{...user}
						key={`${Symbol(index).toString()}`}
						removeUserCard={removeUserCard}
						currentIndex={index}
					/>
				))}
			</div>
		)
	}
}

export default CardsWrapper;
