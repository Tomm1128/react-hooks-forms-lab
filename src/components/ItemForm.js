import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit, onFoodNameInput, onCategoryInput}) {

  return (
    <form onSubmit={onItemFormSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={onFoodNameInput}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={onCategoryInput}>
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
