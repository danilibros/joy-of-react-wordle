import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  // React.useEffect(() => {
  //   console.log(`guess`, guess?.word.split(""));
  // });

  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <span key={num} className="cell">
            {guess ? guess.word[num] : ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
