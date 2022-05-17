import logo from './logo.svg';
import GroceryItemCard from './groceryItemCard';
import './App.css';
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
        <div className="groceryitemCard-list">
          <GroceryItemCard name="Skinless Chicken Breasts"  
          dateExpiring="June 3rd, 2022"></GroceryItemCard>
        </div>
    </div>
  );
}

export default App;
