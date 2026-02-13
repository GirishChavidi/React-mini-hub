import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Enter valid numbers");
      return;
    }

    switch (operator) {
      case "+":
        setResult(n1 + n2);
        break;
      case "-":
        setResult(n1 - n2);
        break;
      case "*":
        setResult(n1 * n2);
        break;
      case "/":
        setResult(n2 !== 0 ? n1 / n2 : "Cannot divide by 0");
        break;
      default:
        setResult("Choose operator");
    }
  };

  const handleReset = () => {
    setNum1("");
    setNum2("");
    setOperator("");
    setResult("");
  };

  return (
    <div className="calculator-wrapper">
      <div className="calculator-container">
        <h2>Basic Calculator</h2>

        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
          className="input-field"
        />

        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          className="operator-select"
        >
          <option value="">Select Operator</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>

        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
          className="input-field"
        />

        <div className="button-group">
          <button onClick={handleCalculate} className="calculate-btn">
            Calculate
          </button>

          <button onClick={handleReset} className="reset-btn">
            Reset
          </button>
        </div>

        <h3 className="result">Result: {result}</h3>
      </div>
    </div>
  );
}

export default Calculator;
