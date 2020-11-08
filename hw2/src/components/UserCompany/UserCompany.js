import "./UserCompany.css"

const UserCompany = ({ name, catchPhrase, bs }) => (
	<div className="users__user-card_company">
		<span className="bold">{catchPhrase}</span>
		<span>Company name:</span>
		<span className="bold">{name}</span>
		<span>BS:</span>
		<span className="bold">{bs}</span>
	</div>
)

export default UserCompany;