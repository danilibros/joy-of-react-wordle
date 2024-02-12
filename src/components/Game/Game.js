import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessHistory from "../GuessHistory";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistoryList, setGuessHistoryList] = React.useState([]);

  return (
    <>
      <GuessHistory guessHistoryList={guessHistoryList}></GuessHistory>
      <GuessInput
        guessHistoryList={guessHistoryList}
        setGuessHistoryList={setGuessHistoryList}
      ></GuessInput>
    </>
  );
}

export default Game;
