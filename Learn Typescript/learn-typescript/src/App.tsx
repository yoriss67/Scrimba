// import React from 'react'
// import './App.css'

// const button = document.querySelector('.button')
// const firstInput = document.querySelector('#first-input')
// const secondInput = document.querySelector('#second-input')
// export const screen = document.querySelector('.screen')

// interface AppProps {
//   a: number
//   b: number
// }

// const App: React.FC<AppProps>  = ({a, b} ) => {

//   function addNumbers(a,b) {
//     screen.innerHTML = a + b
// }

//   return (
//     <div>
//        <div className="calculator">
//            <input id="first-input" placeholder="first input"></input>
//            <h1>+</h1>
//            <input id="second-input" placeholder="second input"></input>
//            <div className="button"></div>
//            <div className="screen">00.00</div>
//        </div>
//     </div>
//   )
// }
// export default App

// 🌸
import './App.css';
import React, { useState } from "react";

const App: React.FC = () => {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [result, setResult] = useState("00.00");

  const addNumbers = () => {
    const a = parseFloat(firstInput);
    const b = parseFloat(secondInput);

    if (isNaN(a) || isNaN(b)) {
      setResult("Invalid input");
    } else {
      setResult((a + b).toString());
    }
  };

  return (
    <div className="calculator">
      <input
        id="first-input"
        placeholder="first input"
        value={firstInput}
        onChange={(e) => setFirstInput(e.target.value)}
      />
      <h1>+</h1>
      <input
        id="second-input"
        placeholder="second input"
        value={secondInput}
        onChange={(e) => setSecondInput(e.target.value)}
      />
      <button className="button" onClick={addNumbers}>
        Calculate
      </button>
      <div className="screen">{result}</div>
    </div>
  );
};

export default App;
