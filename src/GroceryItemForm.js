import React, { useState } from 'react';

const GroceryItemForm = ({ addItem }) => {
	const [userInput, setState ] = useState({
		itemName: "",
		dateExpiring: ""
	});
	
	const handleChange = (e) => {
		const { name, value } = e.target;
	
		setState({
		  ...userInput,
		  [name]: value,
		});
	  };
	
	const handleSubmit = (e) => {
		e.preventDefault();
		addItem(userInput);
		setState({
			itemName: "",
			dateExpiring: ""
		});
	}
	
	return (
		<form onSubmit = {handleSubmit}>
			<label>
				name
				<input
					type = "text"
					name = "itemName"
					value = {userInput.itemName}
					onChange = {handleChange}
				/>
			</label>
			<label>
				date expiring
				<input
					type = "text"
					name = "dateExpiring"
					value = {userInput.dateExpiring}
					onChange = {handleChange}
				/>
			</label>
			<button>Submit</button>
		</form>
	);
};

export default GroceryItemForm;