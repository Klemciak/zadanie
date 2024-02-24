import React, { useState } from "react";
import "../style/Header.scss";

function Header({ handleSelectAll, handleButtonClick }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleClick = () => {
    setIsButtonClicked(!isButtonClicked);
    handleButtonClick(!isButtonClicked);
  };

  return (
    <div className="header">
      <input type="checkbox" onChange={handleSelectAll} />
      <h3>Owoce</h3>
      <button onClick={handleClick}>
        <span
          className={`material-symbols-outlined ${
            isButtonClicked ? "active" : ""
          }`}
        >
          expand_more
        </span>
      </button>
    </div>
  );
}

export default Header;
