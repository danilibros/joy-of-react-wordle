import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessHistory from "../GuessHistory";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessHistoryList, setGuessHistoryList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("");

  function handleSubmitGuess(tentativeGuess) {
    const nextGuess = {
      word: tentativeGuess,
      id: crypto.randomUUID(),
    };

    // check number of guesses and if guess matches answer
    console.log(`nextGuess: ${nextGuess.word}`);
    console.log(`answer: ${answer}`);
    if (nextGuess.word === answer) {
      setGameStatus("happy");
    } else if (guessHistoryList.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus("sad");
    }

    setGuessHistoryList([...guessHistoryList, nextGuess]);
  }

  return (
    <>
      <GuessHistory
        guessHistoryList={guessHistoryList}
        answer={answer}
      ></GuessHistory>
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      ></GuessInput>
      <Banner
        answer={answer}
        numOfGuesses={guessHistoryList.length}
        gameStatus={gameStatus}
      />
    </>
  );
}

export default Game;
