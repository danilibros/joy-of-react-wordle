import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const getClassForCell = (letterIndex) => {
    return guess?.status[letterIndex].status;
  };

  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <span key={num} className={"cell " + getClassForCell(num)}>
            {guess ? guess.word[num] : ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
