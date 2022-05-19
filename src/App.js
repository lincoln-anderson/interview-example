import GroceryList from './GroceryList';
import GroceryItemForm from './GroceryItemForm';
import './App.css';
import React, { useState } from "react";
import groceryitems from "./db.json"
import Header from "./Header"




function App() {
  
  const [ groceryList, setGroceryList ] = useState(groceryitems);
  
  const addItem = (userInput ) => {
    let copy = [...groceryList];
    copy = [...copy, {id: groceryList.length + 1, name: userInput.itemName, dateExpiring: userInput.dateExpiring, expired: false}]
    setGroceryList(copy)
  }
  
  return (
    <div className="App">
        <Header />
        <GroceryList groceryList = {groceryList}/>
        <GroceryItemForm addItem = {addItem}/>
    </div>
  );
}

export default App;
