import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const submitForm = (event) => {
    event.preventDefault();
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
        required
      />
    </form>
  );
}

export default GuessInput;
