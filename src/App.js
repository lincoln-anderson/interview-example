import GroceryItemCard from './groceryItemCard';
import './App.css';
import React from "react";
import groceryitems from "./groceryItems.json"



function App() {
  return (
    <div className="App">
    
      <h1>Grocery List</h1>
        <div className="groceryitemCard">
          <ul>
            {groceryitems.map((item) => <GroceryItemCard key = {item.id} name={item.name} dateExpiring={item.dateExpiring} />)}
          </ul>
        </div>
    </div>
  );
}

export default App;
