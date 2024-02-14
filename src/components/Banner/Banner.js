import React from "react";

function Banner({ gameStatus, answer, numOfGuesses }) {
  const winningMessage = (
    <p>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>
        {numOfGuesses} {numOfGuesses === 1 ? "guess" : "guesses"}
      </strong>
      .
    </p>
  );

  const loosingMessage = (
    <p>
      Sorry, the correct answer is
      <strong> {answer}</strong>.
    </p>
  );

  return (
    <>
      {gameStatus && (
        <div className={`${gameStatus} banner`}>
          {gameStatus === "happy" ? winningMessage : loosingMessage}
        </div>
      )}
    </>
  );
}

export default Banner;
