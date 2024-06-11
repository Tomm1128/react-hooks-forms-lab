import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedFood, setSearchFood] = useState("Search")
  let currentFoodItems = items

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const updateFoodSearch = (event) => {
    console.log(event.target.value)
    setSearchFood(event.target.value)
  }

  const onItemFormSubmit = (formData) => {

  }

  const itemsToDisplay = currentFoodItems.filter((item) => {
    if (searchedFood === "Search") return true
    else if (searchedFood.length > 0){
      let foodName = item.name.toLowerCase()
      return foodName.includes(searchedFood) || item.name.includes(searchedFood)
    }
    else if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={onItemFormSubmit}
      />
      <Filter
      onSearchChange={updateFoodSearch}
      search = {searchedFood}
      onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
