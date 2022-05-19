import GroceryItemCard from './groceryItemCard';
import './App.css';
import React from "react";
import groceryitems from "./db.json"




function App() {
  
  const axios = require('axios');
  
  var myData = axios.get('http://localhost:3000/GroceryItems')
  .then(function (response) {
        console.log(response.data)
        return response.data;
    })
  console.log(myData)
  
  return (
    <div className="App">
    
      <h1>Grocery List</h1>
        <div className="groceryitemCard">
          <ul className="groceryitemCard">
            {groceryitems.GroceryItems.map((item) => <GroceryItemCard key = {item.id} name={item.name} dateExpiring={item.dateExpiring} />)}
          </ul>
        </div>
    </div>
  );
}

export default App;
