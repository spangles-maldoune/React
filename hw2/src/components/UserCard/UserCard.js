import React from 'react';
import "./UserCard.css";

import UserAddress from "../UserAddress/UserAddres";
import UserCompany from "../UserCompany/UserCompany";
import UserInfo from "../UserInfo/UserInfo";
import DeleteButton from "../DeleteButton/DeleteButton";

class UserCard extends React.Component {

	render() {
		const { name, username, email, address, phone, website, company, removeUserCard, currentIndex } = this.props;
		const isShowedAddress = address && Object.keys(address).length !== 0;
		const isShowedCompany = company && Object.keys(company).length !== 0;

		return(
			<div className="users__user-card">
				<UserInfo
					name={name ? name : "-"}
					username={username ? username : "-"}
					email={email ? email : "-"}
					phone={phone ? phone : "-"}
					website={website ? website : "-"}
				/>
				<div className="users__user-card_subinfo">
					{isShowedAddress && <UserAddress {...address}/>}
					{isShowedCompany && <UserCompany {...company}/>}
				</div>
				<DeleteButton
					removeUserCard={removeUserCard}
					currentIndex={currentIndex}
				/>
			</div>
		)
	}
}

export default UserCard;
