import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult(result + Number(inputRef.current.value));
  };

  const minus = (e) => {
    e.preventDefault();
    setResult(result - Number(inputRef.current.value));
  };

  const times = (e) => {
    e.preventDefault();
    setResult(result * Number(inputRef.current.value));
  };

  const divide = (e) => {
    e.preventDefault();
    setResult(result / Number(inputRef.current.value));
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult(0);
    inputRef.current.value = "";
  };

  return (
    <div className="App">
      <div>
        <h1>React Calculator</h1>
      </div>
      <form>
        <h2>{result}</h2>
        <input ref={inputRef} type="number" placeholder="Type a number" />
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={times}>x</button>
        <button onClick={divide}>/</button>
        <button onClick={resetInput} className="btn1">
          reset input
        </button>
        <button onClick={resetResult} className="btn2">
          reset result
        </button>
      </form>
    </div>
  );
}

export default App;
