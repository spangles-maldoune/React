import "./DeleteButton.css";

const DeleteButton = (props) => {
	const { removeUserCard, currentIndex } = props;

	return(
		<div>
			<button className="users__button" onClick={() => removeUserCard(currentIndex)}>Delete</button>
		</div>
	)
}

export default DeleteButton;

