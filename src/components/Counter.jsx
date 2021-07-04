import React, { useState } from "react";
import "./Counter.css";

export const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputVa, setInputVa] = useState(1);

  const addToCounter = () => {
    setCounterValue(counterValue + inputVa);
  };
  const subtractFromCounter = () => {
    setCounterValue(counterValue - inputVa);
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
        value={inputVa}
        // onChange={(e) => setInputVa;(e.target.value)}  // e.target.value is string
        onChange={(e) => setInputVa(Number(e.target.value))}
        data-testid="input"
      />
      <button data-testid="addBtn" onClick={addToCounter}>
        +
      </button>
    </div>
  );
};
