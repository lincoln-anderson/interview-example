import React from 'react';
import GroceryItem from './GroceryItem'

const GroceryList = ({groceryList}) => {
	return (
		<div>
			{groceryList.map(groceryItem => {
				return (
					<div key = {groceryItem.id}>
						<GroceryItem groceryItem = {groceryItem} />
					</div>
				)
			})}
		
		</div>
	);
};

export default GroceryList;