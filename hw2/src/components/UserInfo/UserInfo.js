import "./UserInfo.css";

const UserInfo = ({ name, username, email, phone, website }) => (
	<div className="users__user-card_info">
		<span>First name: <span>{name}</span></span>
		<span>Last name: <span>{username}</span></span>
		<span>Email: <span>{email}</span></span>
		<span>Phone: <span>{phone}</span></span>
		<span>Website: <span>{website}</span></span>
	</div>
)

export default UserInfo;