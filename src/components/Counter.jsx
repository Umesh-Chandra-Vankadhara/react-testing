import React, { useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const addToCounter = () => {
    setCounterValue(counterValue + inputValue);
  };
  const subtractFromCounter = () => {
    setCounterValue(counterValue - inputValue);
  };
  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h2
        data-testid="counter"
        className={`${counterValue >= 100 ? "green" : ""}${
          counterValue <= -100 ? "red" : ""
        }`}
      >
        {counterValue}
      </h2>
      <button data-testid="subtract-btn" onClick={subtractFromCounter}>
        -
      </button>
      <input
        type="number"
        className="text-center"
        value={inputValue}
        // onChange={(e) => setInputValue(e.target.value)}  // e.target.value is string
        onChange={(e) => setInputValue(Number(e.target.value))}
        data-testid="input"
      />
      <button data-testid="addBtn" onClick={addToCounter}>
        +
      </button>
    </div>
  );
};
