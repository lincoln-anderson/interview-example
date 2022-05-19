import React from 'react';

const GroceryItem = ({groceryItem}) => {
	return (
		<div id = {groceryItem.id} key = {groceryItem.id} className={groceryItem.expired ? "strike" : ""}>
			{groceryItem.name}
		</div>
	);
};

export default GroceryItem;