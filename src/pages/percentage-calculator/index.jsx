import React, { useState } from "react";

export default function index() {
  const [number, setNumber] = useState("");
  const [percentage, setPercentage] = useState("");
  const [result, setResult] = useState(null);

  const calculatePercentage = () => {
    if (number && percentage) {
      const numberValue = parseFloat(number);
      const percentageValue = parseFloat(percentage);

      const calculatedPercentage = (
        numberValue *
        (percentageValue / 100)
      ).toFixed(2);

      setResult(calculatedPercentage);
    }
  };

  return (
    <div>
      <h2>Percentage Calculator</h2>
      <div>
        <label>Number:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div>
        <label>Percentage (%):</label>
        <input
          type="number"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
        />
      </div>
      <button onClick={calculatePercentage}>Calculate</button>
      {result && (
        <p>
          {percentage}% of {number} is {result}.
        </p>
      )}
    </div>
  );
}
