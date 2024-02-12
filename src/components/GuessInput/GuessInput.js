import React from "react";

function GuessInput({ guessHistoryList, setGuessHistoryList }) {
  const [guess, setGuess] = React.useState("");

  const submitForm = (event) => {
    event.preventDefault();
    console.log({ guess: guess });
    setGuessHistoryList([
      ...guessHistoryList,
      { id: crypto.randomUUID(), word: guess },
    ]);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={submitForm}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
        minLength={5}
        maxLength={5}
        required
      />
    </form>
  );
}

export default GuessInput;
