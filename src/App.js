import GroceryItemCard from './groceryItemCard';
import './App.css';
import React from "react";

function App() {
  const items = [
    {id: 3, name: "Chicken Breasts", datePurchased: "june 6th 2022", dateExpiring: "june 10th, 2022"},
    {id: 2, name: "Chicken thighs", datePurchased: "june 6th 2022", dateExpiring: "june 10th, 2022"},
    {id: 1, name: "steak", datePurchased: "june 6th 2022", dateExpiring: "june 10th, 2022"}
  ]
  return (
    <div className="App">
    
      <h1>Grocery List</h1>
        <div className="groceryitemCard">
          <ul>
            {items.map((item) => <GroceryItemCard key={item.id} name={item.name} dateExpiring={item.dateExpiring} />)}
          </ul>
        </div>
    </div>
  );
}

export default App;
