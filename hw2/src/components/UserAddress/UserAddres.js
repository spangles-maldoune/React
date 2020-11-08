import "./UserAddress.css";

const UserAddress = ({ street, suite, city, zipcode }) => (
	<div className="users__user-card_address">
		<span>Address:</span>
		<span className="bold">{suite} {street}, {city}</span>
		<span>zipcode:</span>
		<span className="bold">{zipcode}</span>
	</div>
)

export default UserAddress;