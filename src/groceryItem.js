import { v4 as uuidv4 } from 'uuid';

class GroceryItem {
	constructor(id, name, datePurchased, dateExpiring) {
		this.id = id
		this.name = name
		this.datePurchased = datePurchased
		this.dateExpiring = dateExpiring
	}
}