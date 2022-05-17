export default function GroceryItemCard({name, dateExpiring}) {
	return (
		<div className = "groceryItemCard">
			<h3>{name}</h3>
			<h2>{dateExpiring}</h2>
		</div>
	)
}