import { useState } from "react";
import Board from "./Board";
import History from "./History";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isNext, setIsNext] = useState(false);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  const handleOnPlay = (nextSquares) => {
    setIsNext(!isNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    console.log(nextHistory);
    setHistory(nextHistory);
    setCurrentMove(currentMove + 1);
  };

  const jumpTo = (move) => {
    setCurrentMove(move);
    setIsNext(move % 2 !== 0);
  };

  return (
    <div className="flex justify-center p-4">
      <div className="mr-16">
        <Board squires={currentSquares} onPlay={handleOnPlay} isNext={isNext} />
      </div>
      <div>
        <History jumpTo={jumpTo} history={history} />
      </div>
    </div>
  );
}
