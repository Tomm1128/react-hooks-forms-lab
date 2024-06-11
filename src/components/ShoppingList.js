import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedFood, setSearchFood] = useState("")
  const [foodName, setFoodName] = useState("")
  const [category, setCategory] = useState("Produce")
  const [submittedData, setSubmittedData] = useState(items)

  const handleFoodName = (event) => {
    setFoodName(event.target.value)
  }

  const handleFoodCategory = (event) => {
    setCategory(event.target.value)
  }

  console.log(submittedData)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = {
      id: submittedData[submittedData.length - 1].id + 1,
      name: foodName,
      category: category
      }
    const formDataArray = [...submittedData,formData]
    setSubmittedData(formDataArray)
    console.log(submittedData)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const updateFoodSearch = (event) => {
    setSearchFood(event.target.value)
  }

  const itemsToDisplay = submittedData.filter((item) => {
    if (searchedFood.length > 0){
      let foodName = item.name.toLowerCase()
      return foodName.includes(searchedFood)
    }
    else if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={handleSubmit}
        onFoodNameInput={handleFoodName}
        onCategoryInput={handleFoodCategory}
      />
      <Filter onSearchFood={updateFoodSearch} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
