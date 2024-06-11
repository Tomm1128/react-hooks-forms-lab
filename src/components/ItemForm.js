import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [foodName, setFoodName] = useState("")
  const [category, setCategory] = useState("Produce")

  const handleFoodName = (event) => {
    setFoodName(event.target.value)
  }

  const handleFoodCategory = (event) => {
    setCategory(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = {
      id: uuid(),
      name: foodName,
      category: category
    }
      onItemFormSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={handleFoodName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleFoodCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
