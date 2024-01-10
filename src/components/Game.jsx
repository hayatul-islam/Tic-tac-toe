import { useState } from "react";
import Board from "./Board";
import History from "./History";

export default function Game() {
  const [history, setHistory] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);

  return (
    <div className="flex justify-center p-4">
      <div className="mr-16">
        <Board
          squires={history}
          setHistory={setHistory}
          setIsNext={setIsNext}
          isNext={isNext}
        />
      </div>
      <div>
        <History />
      </div>
    </div>
  );
}
