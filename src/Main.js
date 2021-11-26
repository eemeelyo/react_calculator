import React, { useState } from "react";

function Main() {
  const [inputValue, setInputValue] = useState("");

  function Display(value) {
    setInputValue(inputValue + value);
  }

  
  function Back() {
    setInputValue(inputValue.slice(0,-1));
  }

  function Clear() {
    setInputValue("");
  }
  
  function Calculate() {
    var answer = eval(inputValue)
    setInputValue(answer)
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
        <h1>Calculator</h1>
        <h6>React</h6>

        <table className="table">
          <tr>
            <td colSpan="2">
              <input type="text" value={inputValue} />
            </td>
            <td>
              <button
                onClick={() => {
                  Back();
                }}
              >
                 ← Back  
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  Clear();
                }}
              >
                Clear
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan="1">
              <button
                onClick={() => {
                  Display("1");
                }}
              >
                1
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  Display("2");
                }}
              >
                2
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  Display("3");
                }}
              >
                3
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  Display("/");
                }}
              >
                /
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => {
                  Display("4");
                }}
              >
                4
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  Display("5");
                }}
              >
                5
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  Display("6");
                }}
              >
                6
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  Display("-");
                }}
              >
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => {
                  Display("7");
                }}
              >
                7
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  Display("8");
                }}
              >
                8
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  Display("9");
                }}
              >
                9
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  Display("+");
                }}
              >
                +
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => {
                  Display(".");
                }}
              >
                .
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  Display("0");
                }}
              >
                0
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  Calculate();
                }}
              >
                =
              </button>
            </td>
            <td>
              <button
                onClick={() => {
                  Display("*");
                }}
              >
                *
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Main;
