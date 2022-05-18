import GroceryItemCard from './groceryItemCard';
import './App.css';
import React from "react";

function App() {
  return (
    <div className="App">
        <div className="groceryitemCard">
          <GroceryItemCard name="Skinless Chicken Breasts"  
          dateExpiring="June 3rd, 2022"></GroceryItemCard>
        </div>
        <div className="groceryitemCard">
          <GroceryItemCard name="Chicken Breasts"  
          dateExpiring="June 3rd, 2022"></GroceryItemCard>
        </div>
    </div>
  );
}

export default App;
