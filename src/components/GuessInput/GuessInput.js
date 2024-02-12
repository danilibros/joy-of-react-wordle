import React from "react";

function GuessInput({ handleSubmitGuess, guessHistoryList }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const submitForm = (event) => {
    event.preventDefault();

    if (tentativeGuess.length !== 5) {
      window.alert("enter exactly 5 letters");
      return;
    }
    console.log({ guess: tentativeGuess }); // TODO remove
    handleSubmitGuess(tentativeGuess);

    setTentativeGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={submitForm}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
        }}
        minLength={5}
        maxLength={5}
        pattern="^.{5}$"
        required
        readOnly={guessHistoryList.length >= 6}
        disabled={guessHistoryList.length >= 6}
      />
    </form>
  );
}

export default GuessInput;
