import React from "react";

function GuessHistory({ guessHistoryList }) {
  return (
    <div className="guess-results">
      {guessHistoryList.map((guess) => {
        return (
          <p className="guess" key={guess.id}>
            {guess.word}
          </p>
        );
      })}
    </div>
  );
}

export default GuessHistory;
