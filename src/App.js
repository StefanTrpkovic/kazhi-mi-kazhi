import React, { useState } from "react";
import "./App.css";
import AdComponent from "./AdComponent";
import { possibleAnswers } from "./constants";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [randomIndex, setRandomIndex] = useState(0);

  const ask = () => {
    if (userInput) {
      let rndNumber = Math.floor(Math.random() * 20);
      while (rndNumber === 0) rndNumber = Math.floor(Math.random() * 20);
      setRandomIndex(rndNumber);
      setUserInput("");
    }
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) ask();
  };

  const handleChange = (event) => setUserInput(event.target.value);

  const answer = possibleAnswers[randomIndex];

  return (
    <div className="question-container1">
      <div className="question-headers">
        <h2>Сконцентрирај се убаво.</h2>
        <h2>
          Помисли на прашање, постави го и магичната топка ќе ти го покаже
          патот.
        </h2>
      </div>
      <div className="question-container">
        <input
          className="input"
          type="text"
          value={userInput}
          onChange={handleChange}
          onKeyDown={handleKeypress}
          placeholder="Постави прашање"
        />
        <button className="input" onClick={ask}>
          Кажи ми кажи!
        </button>
      </div>

      <div className="ball-container">
        <div className="ball-black-outer">
          <div className="ball-white-inner">
            <div>
              {answer !== "8" ? answer : <div className="eight">8</div>}
            </div>
          </div>
        </div>
        <div className="ball-shadow"></div>
      </div>
    </div>
  );
}
