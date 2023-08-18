import React, { useState, useMemo } from "react";
import "./NumberList.css"; // Import the CSS file

const NumberList = () => {
  const [numbers, setNumbers] = useState([5, 1, 9, 3, 10]);
  const [isDescending, setIsDescending] = useState(true);

  const sortedNumbers = useMemo(() => {
    if (isDescending) {
      return [...numbers].sort((a, b) => b - a);
    } else {
      return [...numbers].sort((a, b) => a - b);
    }
  }, [numbers, isDescending]);

  const handleToggleOrder = () => {
    setIsDescending((prevIsDescending) => !prevIsDescending);
  };

  return (
    <div className="number-list-container">
      <h2>Number List</h2>
      <ul className="number-list">
        {sortedNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <button className="toggle-button" onClick={handleToggleOrder}>
        Change to {isDescending ? "Ascending" : "Descending"} Order
      </button>
    </div>
  );
};

export default NumberList;
