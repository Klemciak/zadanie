import React from "react";
import "../style/Content.scss";

function Content({
  fruits,
  selectedIndexes,
  priceInputs,
  handleInputChange,
  handleAddPriceClick,
  isButtonClicked,
}) {
  return (
    <div className="content">
      <ul className={`fruitList ${isButtonClicked ? "active" : ""}`}>
        {fruits.map((fruit, index) => (
          <li key={index}>
            <input
              type="checkbox"
              name="checkbox"
              onChange={(event) => handleInputChange(event, index)}
              checked={selectedIndexes.includes(index)}
            />
            <h4>{fruit.name}</h4>
            <span className="price">{fruit.price}</span>
          </li>
        ))}
      </ul>
      <div className="price">
        <ul className="priceList">
          {selectedIndexes.map((index) => (
            <li key={index}>
              <h4>{fruits[index].name}</h4>
              <input
                type="number"
                name="price"
                placeholder="Cena"
                value={priceInputs[index]}
                onChange={(event) => handleInputChange(event, index)}
              />
              <button onClick={() => handleAddPriceClick(index)}>
                Dodaj cenę
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Content;
