import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const guessResult = checkGuess(guess?.word, answer);

  const getClassForCell = (letterIndex) => {
    return guessResult ? guessResult[letterIndex].status : "";
  };

  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <span key={num} className={"cell " + getClassForCell(num)}>
            {guessResult ? guessResult[num].letter : ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
