import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessHistory({ guessHistoryList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return (
          <Guess key={index} guess={guessHistoryList[index]} answer={answer} />
        );
      })}
    </div>
  );
}

export default GuessHistory;
