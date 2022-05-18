export default function GroceryItemCard(props) {
	return (
		<div className = "groceryItemCard-li">
			<h1>{props.name}</h1>
			<h3>Expires: {props.dateExpiring}</h3>
		</div>
	)
}