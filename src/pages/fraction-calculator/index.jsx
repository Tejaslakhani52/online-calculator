import React, { useState } from "react";

export default function index() {
  const [numerator1, setNumerator1] = useState("");
  const [denominator1, setDenominator1] = useState("");
  const [numerator2, setNumerator2] = useState("");
  const [denominator2, setDenominator2] = useState("");
  const [result, setResult] = useState(null);

  const calculateFraction = (operation) => {
    if (numerator1 && denominator1 && numerator2 && denominator2) {
      const num1 = parseFloat(numerator1);
      const den1 = parseFloat(denominator1);
      const num2 = parseFloat(numerator2);
      const den2 = parseFloat(denominator2);

      let resultFraction;
      switch (operation) {
        case "add":
          resultFraction = `${num1 * den2 + num2 * den1} / ${den1 * den2}`;
          break;
        case "subtract":
          resultFraction = `${num1 * den2 - num2 * den1} / ${den1 * den2}`;
          break;
        case "multiply":
          resultFraction = `${num1 * num2} / ${den1 * den2}`;
          break;
        case "divide":
          resultFraction = `${num1 * den2} / ${den1 * num2}`;
          break;
        default:
          resultFraction = "Invalid operation";
      }

      setResult(resultFraction);
    }
  };

  return (
    <div>
      <h2>Fraction Calculator</h2>
      <div>
        <label>Fraction 1:</label>
        <input
          type="number"
          placeholder="Numerator"
          value={numerator1}
          onChange={(e) => setNumerator1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Denominator"
          value={denominator1}
          onChange={(e) => setDenominator1(e.target.value)}
        />
      </div>
      <div>
        <label>Fraction 2:</label>
        <input
          type="number"
          placeholder="Numerator"
          value={numerator2}
          onChange={(e) => setNumerator2(e.target.value)}
        />
        <input
          type="number"
          placeholder="Denominator"
          value={denominator2}
          onChange={(e) => setDenominator2(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => calculateFraction("add")}>Add</button>
        <button onClick={() => calculateFraction("subtract")}>Subtract</button>
        <button onClick={() => calculateFraction("multiply")}>Multiply</button>
        <button onClick={() => calculateFraction("divide")}>Divide</button>
      </div>
      {result && <p>Result: {result}</p>}
    </div>
  );
}
