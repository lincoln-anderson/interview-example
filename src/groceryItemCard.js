export default function GroceryItemCard(props) {
	return (
		<div className = "groceryItemCard-li">
			<h3>{props.name}</h3>
			<h2>{props.dateExpiring}</h2>
		</div>
	)
}