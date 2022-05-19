import GroceryItem from './GroceryItem';
import GroceryList from './GroceryList';
import './App.css';
import React, { useState } from "react";
import groceryitems from "./db.json"
import Header from "./Header"




function App() {
  
  const [ groceryList, setGroceryList ] = useState(groceryitems);
  
  const axios = require('axios');
  
  var myData = axios.get('http://localhost:3000/GroceryItems')
  .then(function (response) {
        return response.data;
    })
  
  return (
    <div className="App">
        <Header />
        <GroceryList groceryList = {groceryList}/>
    </div>
  );
}

export default App;
