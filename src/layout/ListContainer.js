import React, { useState } from "react";
import "../style/ListContainer.scss";
import Header from "../components/Header.js";
import Content from "../components/Content.js";

function ListContainer() {
  const initialFruits = [
    { name: "Jabłka", price: "" },
    { name: "Banany", price: "" },
    { name: "Pomarańcze", price: "" },
    { name: "Wiśnie", price: "" },
    { name: "Winogrono", price: "" },
  ];

  const [fruits, setFruits] = useState(initialFruits);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [priceInputs, setPriceInputs] = useState(
    new Array(initialFruits.length).fill("")
  );

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleButtonClick = (clicked) => {
    setIsButtonClicked(clicked);
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    if (name === "checkbox") {
      handleCheckboxChange(index);
    } else {
      const newPriceInputs = [...priceInputs];
      newPriceInputs[index] = value;
      setPriceInputs(newPriceInputs);
    }
  };

  const handleCheckboxChange = (index) => {
    setSelectedIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((selectedIndex) => selectedIndex !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  const handleAddPriceClick = (index) => {
    const newPrice = priceInputs[index];
    setFruits((prevFruits) =>
      prevFruits.map((fruit, i) => {
        if (i === index) {
          return { ...fruit, price: newPrice };
        }
        return fruit;
      })
    );
  };

  const handleSelectAll = () => {
    setSelectedIndexes((prevIndexes) => {
      const allSelected = prevIndexes.length === fruits.length;

      const selectAllChecked = allSelected && allSelectedIndexes();

      if (selectAllChecked && allSelected) {
        return [];
      } else {
        return Array.from({ length: fruits.length }, (_, index) => index);
      }
    });
  };

  const allSelectedIndexes = () => {
    return selectedIndexes.length === fruits.length;
  };
  return (
    <div className="ListContainer">
      <Header
        handleSelectAll={handleSelectAll}
        handleButtonClick={handleButtonClick}
      />
      <Content
        fruits={fruits}
        selectedIndexes={selectedIndexes}
        priceInputs={priceInputs}
        handleInputChange={handleInputChange}
        handleAddPriceClick={handleAddPriceClick}
        isButtonClicked={isButtonClicked}
      />
    </div>
  );
}

export default ListContainer;
