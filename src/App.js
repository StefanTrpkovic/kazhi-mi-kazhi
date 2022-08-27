import React, { useState } from "react";
import "./App.css";
import AdComponent from "./AdComponent";
import { possibleAnswers } from "./constants";
import { useTranslation } from "react-i18next";
import "./i18n";
import React from "react";
import AdSense from "react-adsense";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [randomIndex, setRandomIndex] = useState(0);
  const { t } = useTranslation();

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
    <>
      <div className="question-container1">
        <div className="question-headers">
          <h2>{t(`focus`)}</h2>
          <h2>{t(`thinkOfAQuestion`)}</h2>
        </div>
        <div className="question-container">
          <input
            className="input"
            type="text"
            value={userInput}
            onChange={handleChange}
            onKeyDown={handleKeypress}
            placeholder={t(`askAQuestion`)}
          />
          <button className="input" onClick={ask}>
            {t(`tellMePlease`)}
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
      <AdSense.Google
        client={`ca-pub-${process.env.REACT_APP_AD_ID}`}
        slot={process.env.REACT_APP_AD_SLOT}
        style={{ display: "block" }}
        layout="in-article"
        format="auto"
      />
    </>
  );
}
