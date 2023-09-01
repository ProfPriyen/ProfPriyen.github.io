import React, { useState } from 'react';

const Addition = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNumber1Change = (e) => {
    setNumber1(Number(e.target.value));
  };

  const handleNumber2Change = (e) => {
    setNumber2(Number(e.target.value));
  };

  const handleAddition = () => {
    setResult(number1 + number2);
  };
  const handleSub = () => {
    setResult(number1 - number2);
  };
  const handleMul = () => {
    setResult(number1 * number2);
  };
  const handleDiv = () => {
    setResult(number1 / number2);
  };

  return (
    <div>
      <h1>Calculator App</h1>
      <div className="App">
        <label>
          Number 1:
          <input type="number" value={number1} onChange={handleNumber1Change} />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input type="number" value={number2} onChange={handleNumber2Change} />
        </label>
      </div>
      <br/>
      <table className="appf">
        <tr>
      <td><button onClick={handleAddition}>Add</button></td>
      <td><button onClick={handleSub}>Subtraction</button></td>
      <td><button onClick={handleMul}>Multiplication</button></td>
      <td><button onClick={handleDiv}>Division</button></td>
      </tr>
      <td><h2 className="App">Result: {result}</h2></td>
      </table>
    </div>
  );
};

export default Addition
