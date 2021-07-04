import React, { useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputVal, setInputVal] = useState(1);

  const addToCounter = () => {
    setCounterValue(counterValue + inputVal);
  };
  const subtractFromCounter = () => {
    setCounterValue(counterValue - inputVal);
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
        value={inputVal}
        // onChange={(e) => setInputVal;(e.target.value)}  // e.target.value is string
        onChange={(e) => setInputVal(Number(e.target.value))}
        data-testid="input"
      />
      <button data-testid="addBtn" onClick={addToCounter}>
        +
      </button>
    </div>
  );
};