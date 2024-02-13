import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import GuessInput from "../GuessInput";
import GuessHistory from "../GuessHistory";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistoryList, setGuessHistoryList] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const guessStatus = checkGuess(tentativeGuess, answer);
    const nextGuess = {
      word: tentativeGuess,
      id: crypto.randomUUID(),
      status: guessStatus,
    };
    setGuessHistoryList([...guessHistoryList, nextGuess]);
  }

  return (
    <>
      <GuessHistory guessHistoryList={guessHistoryList}></GuessHistory>
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        guessHistoryList={guessHistoryList}
      ></GuessInput>
    </>
  );
}

export default Game;
