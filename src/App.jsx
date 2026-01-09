import { useState } from "react";
import "./App.css";

function App() {
  // STATES
  const [input, setInput] = useState("");
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(null);

  // HANDLE OPERATOR CLICK (+ - * /)
  const handleOperator = (op) => {
    if (input === "") return;

    setFirstValue(Number(input));
    setOperator(op);
    setInput(""); // clear input for second number
  };

  // HANDLE EQUALS (=)
  const calculateResult = () => {
    if (input === "" || firstValue === null) return;

    const secondValue = Number(input);
    let res = 0;

    if (operator === "+") res = firstValue + secondValue;
    if (operator === "-") res = firstValue - secondValue;
    if (operator === "*") res = firstValue * secondValue;
    if (operator === "/") res = secondValue === 0 ? "Error" : firstValue / secondValue;

    setResult(res);
    setInput("");
    setFirstValue(null);
    setOperator("");
  };

  // RESET FUNCTIONS
  const resetInput = () => setInput("");
  const resetAll = () => {
    setInput("");
    setFirstValue(null);
    setOperator("");
    setResult(null);
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>

      {/* RESULT DISPLAY */}
      <div className="result">
        {result !== null ? result : 0}
      </div>

      {/* TOP DISPLAY */}
      <div className="display">
        {firstValue !== null && (
          <span>
            {firstValue} {operator}
          </span>
        )}
      </div>

      {/* INPUT */}
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter number"
      />

      {/* BUTTONS */}
      <div className="buttons">
        <button onClick={() => handleOperator("+")}>Add</button>
        <button onClick={() => handleOperator("-")}>Subtract</button>
        <button onClick={() => handleOperator("*")}>Multiply</button>
        <button onClick={() => handleOperator("/")}>Divide</button>

        <button className="equals" onClick={calculateResult}>=</button>

        <button className="reset" onClick={resetInput}>
          Reset Input
        </button>

        <button className="reset" onClick={resetAll}>
          Reset All
        </button>
      </div>
    </div>
  );
}

export default App;
