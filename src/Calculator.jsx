import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value.replace(/[^0-9+\-*/.]/g, ""));
    // const value = e.target.value.replace(/[^0-9+\-*/.]/g, "");
    // setInputValue(value);
  };

  const handleButtonClick = (inputValue) => {
    setInputValue((prev) => prev + inputValue);
  };

  const ShowAnswer = () => {
    try {
      const ans = eval(inputValue);
      setInputValue(ans.toString());
    } catch (error) {
      setInputValue("Error");
    }
  };

  const handleBackspace = () => {
    setInputValue((prev) => prev.slice(0, -1));
  };

  return (
    <>
      <div className="calculator-body">
        <h2>Calculator</h2>
        <div className="calculator-display">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            style={{ textAlign: "right" }}
            id="input-box"
            readOnly
          />
        </div>
        <div className="calculator-buttons">
          <button className="operand" onClick={() => setInputValue("")}>
            AC
          </button>
          <button className="operand" onClick={handleBackspace}>
            <i className="fa-solid fa-delete-left"></i>
          </button>
          <button className="operand" onClick={() => handleButtonClick("/")}>
            /
          </button>
          <button className="operand" onClick={() => handleButtonClick("*")}>
            X
          </button>
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button className="operand" onClick={() => handleButtonClick("-")}>
            -
          </button>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button className="operand" onClick={() => handleButtonClick("+")}>
            +
          </button>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button className="operand" onClick={() => handleButtonClick("%")}>
            %
          </button>
          <button id="ans" onClick={ShowAnswer}>
            =
          </button>
          <button id="zero" onClick={() => handleButtonClick("0")}>
            0
          </button>
          <button onClick={() => handleButtonClick(".")}>.</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
