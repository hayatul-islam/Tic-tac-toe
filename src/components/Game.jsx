import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  return (
    <div className="flex justify-center p-4">
      <div className="mr-16">
        <Board squires={history[history.length - 1]} />
      </div>
      <div>
        <ol className="border border-gray-400 p-1 text-lg"></ol>
      </div>
    </div>
  );
}
